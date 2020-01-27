from rest_framework import routers
from .api import UserRoleViewSet, RegistUserViewSet

router = routers.DefaultRouter()
router.register('api/userRole', UserRoleViewSet, 'leads')
router.register('api/registUser', RegistUserViewSet, 'leads')

urlpatterns = router.urls