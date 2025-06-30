from django.db import models
from Libros.models import Libro
from Usuarios.models import Usuario

# Create your models here.

class Prestamo(models.Model):
  usuario = models.ForeignKey(Usuario, on_delete=models.PROTECT)
  libro = models.ForeignKey(Libro, on_delete=models.PROTECT)
  fecha_inicio = models.DateField(auto_now_add=True)
  fecha_devolucion = models.DateField(null=True, blank=True)
  devuelto = models.BooleanField(default=False)

  def __str__(self):
    return f"{self.usuario.nombre} -> {self.libro.titulo}"
