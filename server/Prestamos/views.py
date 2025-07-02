from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, mixins
from rest_framework import status
from django.utils import timezone
from .models import Prestamo
from. serializers import PrestamoSerializer

# Create your views here.
class PrestamoViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
  queryset = Prestamo.objects.all().order_by('-fecha_inicio')
  serializer_class = PrestamoSerializer

  @action(detail=False, methods=["post"], url_path=r"devolver/(?P<libro_id>\d+)")
  def devolver_por_libro_id(self, request, libro_id=None):
    try:
      prestamo = Prestamo.objects.get(libro__id=libro_id, devuelto=False)
    except Prestamo.DoesNotExist:
      return Response(
        {"detail": f"El libro con ID {libro_id} no tiene un préstamo activo."},
        status=status.HTTP_404_NOT_FOUND
      )
      
    prestamo.devuelto = True
    prestamo.fecha_devolucion = timezone.now()
    prestamo.libro.disponible = True
    prestamo.libro.save()
    prestamo.save()

    serializer = self.get_serializer(prestamo)
    return Response(serializer.data, status=status.HTTP_200_OK)