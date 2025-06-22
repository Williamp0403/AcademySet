from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    cedula = models.CharField(max_length=20, unique=True)
    correo = models.EmailField()

    def __str__(self):
        return f'{self.nombre} {self.apellido} ({self.cedula})'
# Create your models here.
