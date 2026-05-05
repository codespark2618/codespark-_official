from django.http import JsonResponse
from .models import Student


def student_list(request):
    """Return a JSON list of all students."""
    if request.method != 'GET':
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)

    students = Student.objects.all().values('id', 'name', 'email', 'course')
    student_list = list(students)

    return JsonResponse(student_list, safe=False)
