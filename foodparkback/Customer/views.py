from django.shortcuts import render
from django.conf import settings
import os
from django.http import HttpResponse
from .models import Customer
from .serializers import CustomerSerializer
from rest_framework.generics import ListAPIView

# Customer List View
class CustomerList(ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

# Simple view function
def customer(req):
    return HttpResponse("HOII")
