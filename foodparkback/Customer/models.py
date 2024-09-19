from django.db import models

# Create your models here.
class Customer(models.Model):
    c_fname=models.CharField(max_length=200)
    c_lname=models.CharField(max_length=200)
    c_email=models.EmailField(unique=True)
    c_phone=models.IntegerField()
    c_adrs=models.TextField()
    c_username=models.CharField(max_length=50)
    c_pwd=models.CharField(max_length=16)

    


    