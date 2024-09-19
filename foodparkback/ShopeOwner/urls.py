# ShopeOwner/urls.py
from django.urls import path
from .views import ShopeOwnerList
from .views import ShopCountView

urlpatterns = [
    path('ShopeOwner/', ShopeOwnerList.as_view()),
    path('api/shop_count/', ShopCountView.as_view(), name='shop_count'),
]
