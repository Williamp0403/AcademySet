from rest_framework import serializers
from .models import Libro, Categoria


class LibroSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.CharField(
        source='categoria.nombre', read_only=True)

    class Meta:
        model = Libro
        fields = '__all__'
        read_only_fields = ['isbn']
        extra_kwargs = {
            'categoria': {'required': True}
        }


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        read_only_fields = ['id']
