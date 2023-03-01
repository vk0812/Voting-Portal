from django.db import models
from django.contrib.auth.models import User


class Candidate(models.Model):
    user= models.CharField(verbose_name='Candidate', max_length=100)
    email=models.EmailField(verbose_name='email')
    votes=models.IntegerField(default=0, verbose_name='votes')
    id=models.IntegerField(primary_key=True)

    def __str__(self):
        return self.user
    
