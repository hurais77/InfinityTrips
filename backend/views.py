from django.shortcuts import render
from .models import Hotel, User
from rest_framework import generics
from .serializers import HotelSerializer, UserSerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

class hotel_api(generics.ListAPIView):
    """
    API to list all records
    """
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = '__all__'

class user_api(generics.ListAPIView):
    """
    API to list all records
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = '__all__'

class create_user_api(generics.CreateAPIView):
    """
    Create a record
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    



