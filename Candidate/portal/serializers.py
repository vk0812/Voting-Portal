from rest_framework import serializers
from .models import Candidate

from django.contrib.auth.models import User

class CandidateSerializer(serializers.ModelSerializer):
   class Meta:
    model= Candidate
    fields='__all__'

