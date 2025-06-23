from rest_framework import routers
from .api import UsuariosViewSet


rutas = routers.DefaultRouter()

rutas.register('usuarios', UsuariosViewSet, basename='usuarios')


urlpatterns = rutas.urls
