from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializer import UsuariosSerializer
from .models import Usuario

# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    serializer_class = UsuariosSerializer
    queryset = Usuario.objects.all()

    @action(detail=False, methods=['get'], url_path='buscar-por-cedula')
    def buscar_por_cedula(self, request):
        cedula = request.query_params.get('cedula')
        if not cedula:
            return Response({'error': "Falta el parámetro 'cedula'. "}, status=status.HTTP_400_BAD_REQUEST)
        try: 
            usuario = Usuario.objects.get(cedula=cedula)
            serializer = self.get_serializer(usuario)
            return Response(serializer.data)
        except Usuario.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)