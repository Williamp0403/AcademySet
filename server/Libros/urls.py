from rest_framework.routers import DefaultRouter
from .views import LibroViewSet, CategoriaViewSet

router = DefaultRouter()
router.register(r'libros', LibroViewSet, basename='libro')
router.register(r'categorias', CategoriaViewSet, basename='categoria')

urlpatterns = router.urls
