from rest_framework import viewsets
from .serializer import UsuariosSerializer
from .models import Usuario



# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    serializer_class = UsuariosSerializer
    queryset = Usuario.objects.all()
