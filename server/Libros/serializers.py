from rest_framework import serializers
from .models import Libro, Categoria

class LibroSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.CharField(source='categoria.nombre', read_only=True)
    
    class Meta:
        model = Libro
        fields = ['id', 'titulo', 'autor', 'isbn', 'disponible', 'categoria', 'categoria_nombre']
        extra_kwargs = {
            'categoria': {'required': True}
        }