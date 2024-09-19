# models.py
from django.db import models

class ShopeOwner(models.Model):
    so_name = models.CharField(max_length=200)
    shope_name = models.CharField(max_length=200)
    menu = models.FileField(upload_to='uploads/')
    shope_no = models.IntegerField(unique=True, blank=True, null=True)
    so_number = models.IntegerField()
    so_email = models.EmailField()

    def save(self, *args, **kwargs):
        if not self.shope_no:
            # Automatically set shope_no to the next available integer
            last_entry = ShopeOwner.objects.order_by('shope_no').last()
            self.shope_no = (last_entry.shope_no + 1) if last_entry else 1
        super().save(*args, **kwargs)
