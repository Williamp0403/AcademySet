from rest_framework import viewsets
from .models import Libro, Categoria
from .serializers import LibroSerializer

class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    http_method_names = ['get', 'post', 'put', 'delete', 'head'] 