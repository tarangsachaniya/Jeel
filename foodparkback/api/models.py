from django.db import models

# Create your models here.

class User(models.Model):
    username=models.CharField(max_length=100)
    email=models.CharField(max_length=300)
    phone=models.BigIntegerField()
    password=models.CharField(max_length=500)
    
