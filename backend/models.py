from django.db import models

# Create your models here.
class Hotel(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    image_url = models.CharField(max_length=100)
    city = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    type = models.CharField(max_length=30, null=True, blank=True)
    ac_bed_price = models.FloatField(null=True, blank=True)
    non_ac_bed_price = models.FloatField(null=True, blank=True)
    room_price = models.FloatField(null=True, blank=True)

class User(models.Model):
    name = models.CharField(max_length=50)
    phno = models.CharField(max_length=15)
    age = models.IntegerField()
    username = models.CharField(max_length=10)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)