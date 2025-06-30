from rest_framework import serializers
from .models import Prestamo

class PrestamoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Prestamo
    fields = "__all__"

  def validate_libro(self, libro):
        if not libro.disponible:
            raise serializers.ValidationError("Este libro no está disponible.")
        return libro
    
  def create(self, validated_data):
      libro = validated_data["libro"]
      libro.disponible = False
      libro.save()
      return super().create(validated_data)
    