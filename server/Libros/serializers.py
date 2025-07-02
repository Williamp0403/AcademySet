from rest_framework import serializers
from .models import Libro, Categoria
from Prestamos.models import Prestamo
from django.utils.timezone import localtime


class LibroSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.CharField(
        source='categoria.nombre', read_only=True)
    prestado_a = serializers.SerializerMethodField()
    fecha_prestamo = serializers.SerializerMethodField()

    class Meta:
        model = Libro
        fields = '__all__'
        read_only_fields = ["disponible"]
        extra_kwargs = {
            'categoria': {'required': True}
        }
    def get_prestado_a(self, obj):
        try:
            prestamo = Prestamo.objects.get(libro=obj, devuelto=False)
            return f"{prestamo.usuario.nombre} {prestamo.usuario.apellido}"
        except Prestamo.DoesNotExist:
            return None
    
    def get_fecha_prestamo(self, obj):
        try:
            prestamo = Prestamo.objects.get(libro=obj, devuelto=False)
            return localtime(prestamo.fecha_inicio).strftime("%Y-%m-%d %H:%M:%S")
        except Prestamo.DoesNotExist:
            return None
        

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        read_only_fields = ['id']
