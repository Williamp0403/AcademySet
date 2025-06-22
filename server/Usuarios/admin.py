from django.contrib import admin
from .models import Usuario

# Register your models here.


class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'cedula', 'correo')
    list_filter = ('cedula',)


admin.site.register(Usuario, UsuarioAdmin)
