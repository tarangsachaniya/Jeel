from rest_framework import serializers
from .models import ShopeOwner

class ShopeOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model=ShopeOwner
        fields=["so_name","shope_name","menu","shope_no","so_number","so_email"]
