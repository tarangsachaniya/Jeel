from django.urls import path
from api import views

urlpatterns = [
    path("user/",views.UserList.as_view()),
     path('create-user/', views.create_user, name='create_user'),
]
