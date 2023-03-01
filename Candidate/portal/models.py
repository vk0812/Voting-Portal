from django.db import models
from django.contrib.auth.models import User


class Candidate(models.Model):
    user= models.CharField(User, max_length=100)
    email=models.EmailField(verbose_name='email')
    image=models.ImageField(verbose_name='Profile Picture')
    votes=models.IntegerField(default=0, verbose_name='votes')

    def __str__(self):
        return self.user
    
