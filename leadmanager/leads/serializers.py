from rest_framework import serializers
from leads.models import UserRole, RegistUser

#Lead Serializer
class UserRoleSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserRole
    fields = '__all__'

class RegistUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = RegistUser
    fields = '__all__'