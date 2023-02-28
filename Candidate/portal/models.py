from django.db import models
from django.contrib.auth.models import User

class Candidate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email=models.EmailField()
    image=models.ImageField()
    age=models.IntegerField()
    votes=models.IntegerField()
    
    def __str__(self):
        return self.user.first_name
