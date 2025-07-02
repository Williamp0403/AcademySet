from rest_framework import serializers
from .models import Prestamo
from django.utils import timezone
from django.utils.timezone import localtime

class PrestamoSerializer(serializers.ModelSerializer):
  fecha_inicio = serializers.SerializerMethodField()
  fecha_devolucion = serializers.SerializerMethodField()
  titulo_libro = serializers.CharField(source="libro.titulo", read_only=True)
  nombre_usuario = serializers.SerializerMethodField()

  class Meta:
    model = Prestamo
    fields = "__all__"
    read_only_fields = ['devuelto', 'fecha_devolucion']

  def get_fecha_inicio(self, obj):
     return localtime(obj.fecha_inicio).strftime("%Y-%m-%d %H:%M:%S")
  
  def get_fecha_devolucion(self, obj):
     if obj.fecha_devolucion:
        return localtime(obj.fecha_devolucion).strftime("%Y-%m-%d %H:%M:%S")
    
  def get_nombre_usuario(self, obj):
     return f"{obj.usuario.nombre} {obj.usuario.apellido}"

  def validate_libro(self, libro):
        if not libro.disponible and not self.instance:
            raise serializers.ValidationError("Este libro no está disponible.")
        return libro
    
  def create(self, validated_data):
      libro = validated_data["libro"]
      libro.disponible = False
      libro.save()
      return super().create(validated_data)
  
  def update(self, instance, validated_data):
    nuevo_estado = self.initial_data.get("devuelto", instance.devuelto)

    if instance.devuelto and not nuevo_estado:
      raise serializers.ValidationError("Este préstamo ya fue devuelto y no puede ser revertido.")

    if not instance.devuelto and nuevo_estado:
      instance.devuelto = True
      instance.fecha_devolucion = timezone.now()
      instance.libro.disponible = True
      instance.libro.save()
    
    return super().update(instance, validated_data)