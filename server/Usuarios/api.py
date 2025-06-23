from .models import Usuario
from rest_framework import viewsets, permissions
from Usuarios.serializers import UsuariosSerializer


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UsuariosSerializer
