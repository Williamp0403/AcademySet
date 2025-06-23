from django.contrib import admin
from .models import Libro

# Register your models here.


class LibroAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'autor', 'disponible')
    list_filter = ('disponible',)
    search_fields = ('titulo', 'autor')


admin.site.register(Libro, LibroAdmin)
