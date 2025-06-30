from rest_framework import viewsets
from .models import Libro, Categoria
from .serializers import LibroSerializer, CategoriaSerializer


class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    http_method_names = ['get', 'post', 'put', 'delete', 'head']


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    http_method_names = ['get', 'post', 'put', 'delete', 'head']
