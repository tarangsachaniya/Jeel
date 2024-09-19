from django.shortcuts import render

from .models import ShopeOwner
from .serializers import ShopeOwnerSerializer
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class ShopeOwnerList(ListAPIView):
    queryset=ShopeOwner.objects.all()
    serializer_class=ShopeOwnerSerializer

class ShopCountView(APIView):
    def get(self, request):
        count = ShopeOwner.objects.count()  # Count all entries in the ShopeOwner model
        return Response({'count': count}, status=status.HTTP_200_OK)
