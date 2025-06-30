from django.urls import path, include
from rest_framework import routers
from Prestamos import views

rutas = routers.DefaultRouter()

rutas.register(r'', views.PrestamoViewSet, basename='prestamos')

urlpatterns = rutas.urls

