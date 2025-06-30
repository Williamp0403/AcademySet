from rest_framework import viewsets, mixins
from .models import Prestamo
from. serializers import PrestamoSerializer

# Create your views here.
class PrestamoViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
  queryset = Prestamo.objects.all().order_by('-fecha_inicio')
  serializer_class = PrestamoSerializer
