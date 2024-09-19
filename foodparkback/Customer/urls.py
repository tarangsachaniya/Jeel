from django.urls import path
from .views import CustomerList
# , UserRegister, UserLogin, UserLogout, UserView

urlpatterns = [
    path('customer', CustomerList.as_view(), name="customer"),
    path('Customer/', CustomerList.as_view()),
    # path('register/', UserRegister.as_view(), name='register'),
    # path('login/', UserLogin.as_view(), name='login'),
    # path('logout/', UserLogout.as_view(), name='logout'),
    # path('user/', UserView.as_view(), name='user'),
]
