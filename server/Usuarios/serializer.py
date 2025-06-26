from rest_framework import serializers
from .models import Usuario


class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        # fields = ['id', 'nombre', 'apellido', 'cedula', 'correo']
        fields = "__all__"
        read_only_fields = ['id']
    
    
