# serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'phone', 'password']

    # Hashing the password before saving
    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            phone=validated_data['phone']
        )
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
