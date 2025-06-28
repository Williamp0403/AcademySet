from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import Categoria

@receiver(post_migrate)
def crear_categorias_iniciales(sender, **kwargs):
    if sender.name == 'Libros':
        categorias = ['Ficción', 'Ciencia', 'Terror', 'Biografía']
        for nombre in categorias:
            Categoria.objects.get_or_create(nombre=nombre)