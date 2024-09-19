from django.forms import ValidationError
from rest_framework import serializers
from .models import Customer
from django.contrib.auth import get_user_model,authenticate
UserModel=get_user_model()
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields=["c_fname","c_lname","c_email","c_phone","c_adrs","c_username","c_pwd"]
#     def create_user(self,clean_data):
#         user_obj=UserModel.objects.create_user(email=clean_data['c_email'],password=clean_data["c_pwd"])
#         user_obj.username=clean_data["c_username"]
#         user_obj.save()
#         return user_obj

# class LoginUserSerializer(serializers.Serializer):
#     email=serializers.EmailField()
#     password=serializers.CharField()
#     def check_user(self,clean_data):
#         user=authenticate(username=clean_data["c_email"],password=clean_data["c_pwd"])
#         if not user:
#             raise ValidationError("USer not found")
#         return user

# class UserSerializer(serializers.ModelSerializer):
#     class meta:
#         model:Customer
#         fields=('email','username')

