from rest_framework.routers import DefaultRouter
from .views import LibroViewSet

router = DefaultRouter()
router.register(r'libros', LibroViewSet, basename='libro')  # 'basename' es opcional pero recomendado

urlpatterns = router.urls