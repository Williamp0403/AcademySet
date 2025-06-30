from rest_framework.routers import DefaultRouter
from .views import LibroViewSet, CategoriaViewSet

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet, basename='categoria')
router.register(r'', LibroViewSet, basename='libro')

urlpatterns = router.urls
