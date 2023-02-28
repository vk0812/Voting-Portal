from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    
    def validate_password(self, value: str) -> str:
    
        return make_password(value)

    class Meta:
        model = get_user_model()
        fields = "__all__"
