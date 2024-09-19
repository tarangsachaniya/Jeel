from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView 
from .models import User
# Create your views here.
@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # This will call the create method in the serializer
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserList(ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    