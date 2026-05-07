from django.urls import path
from .views import student_list, enroll_student

urlpatterns = [
    path('students/', student_list, name='student-list'),
    path('enroll/', enroll_student, name='enroll-student'),
]
