from django.contrib import admin
from .models import ShopeOwner
# Register your models here.
admin.site.register(ShopeOwner)

class ShopeOwnerAdmin(admin.ModelAdmin):
    list_display=["so_name,shope_name,menu,shope_no,so_number,so_email"]