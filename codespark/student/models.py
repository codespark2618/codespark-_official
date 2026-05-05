from django.db import models


class Student(models.Model):
    """A simple Student model for storing student details."""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    course = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.course}"
