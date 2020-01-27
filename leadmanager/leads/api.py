from leads.models import UserRole, RegistUser
from rest_framework import viewsets, permissions
from .serializers import UserRoleSerializer, RegistUserSerializer

# Lead Viewset
class UserRoleViewSet(viewsets.ModelViewSet):
  queryset = UserRole.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = UserRoleSerializer

class RegistUserViewSet(viewsets.ModelViewSet):
  queryset = RegistUser.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = RegistUserSerializer