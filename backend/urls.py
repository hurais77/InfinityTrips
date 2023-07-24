from django.urls import path
from . import views

urlpatterns = [
    path("hotel_api/",view=views.hotel_api.as_view()),
     path("user_api/", view= views.user_api.as_view()),
    path("create_user_api/", view= views.create_user_api.as_view())
               ]