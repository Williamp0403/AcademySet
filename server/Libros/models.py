from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(
        max_length=100,
        verbose_name="Nombre de la categoría",
        help_text="Ej: Ciencia Ficción, Terror, etc."
    )
    
    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"
    
    def __str__(self):
        return self.nombre

class Libro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13, unique=True)
    disponible = models.BooleanField(default=True)
    
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        verbose_name="Categoría",
        related_name="libros"  
    )
    
    def __str__(self):
        return f"{self.titulo} ({self.autor})"
