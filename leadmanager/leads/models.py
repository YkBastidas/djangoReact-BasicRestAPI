# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class UserRole(models.Model):
    role_id = models.AutoField(primary_key=True)
    role_name = models.CharField(unique=True, max_length=50)
    role_created_at = models.DateField()

    class Meta:
        managed = False
        db_table = 'user_role'

class RegistUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(unique=True, max_length=30)
    user_password = models.CharField(max_length=64)
    user_fk_role = models.ForeignKey('UserRole', models.CASCADE, db_column='user_fk_role')
    user_created_at = models.DateField()

    class Meta:
        managed = False
        db_table = 'regist_user'
