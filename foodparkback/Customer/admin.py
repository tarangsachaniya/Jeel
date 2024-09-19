from django.contrib import admin
from .models import Customer

# Register your models here.
admin.site.register(Customer)

class CustomerAdmin(admin.ModelAdmin):
    list_display=["c_fname,c_lname,c_email,c_phone,c_username,c_pwd"]
