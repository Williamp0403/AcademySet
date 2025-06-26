from django.urls import path, include
from rest_framework import routers
from Usuarios import views


rutas = routers.DefaultRouter()

rutas.register(r'', views.UsuariosViewSet, 'usuarios')


urlpatterns = [
  path("", include(rutas.urls))
]
