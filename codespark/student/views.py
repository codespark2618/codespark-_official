from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import Student


def student_list(request):
    """Return a JSON list of all students."""
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)

    students = Student.objects.all().values('id', 'name', 'email', 'phone', 'course')
    student_list = list(students)

    return JsonResponse(student_list, safe=False)


@csrf_exempt
def enroll_student(request):
    """Handle student enrollment and send email notification."""
    if request.method != 'POST':
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=405)

    try:
        data = {}
        if request.content_type == 'application/json':
            import json
            data = json.loads(request.body.decode('utf-8') or '{}')
        else:
            data = request.POST

        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        course = data.get('course')

        if not all([name, email, phone, course]):
            return JsonResponse({'error': 'All fields are required.'}, status=400)

        # Save student to database
        student = Student.objects.create(
            name=name,
            email=email,
            phone=phone,
            course=course
        )

        # Send email notification
        subject = f'New Student Enrollment: {name}'
        message = f"""
        New student enrollment received:

        Name: {name}
        Email: {email}
        Phone: {phone}
        Course: {course}

        Enrollment ID: {student.id}
        """

        recipient_email = settings.DEFAULT_FROM_EMAIL  # Send to the configured email

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [recipient_email],
            fail_silently=False,
        )

        return JsonResponse({
            'message': 'Enrollment successful! We will contact you soon.',
            'student_id': student.id
        })

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
