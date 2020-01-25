from django.db import models

class Lead(models.Model):
  user_id = models.AutoField(auto_created=True, primary_key=True)
  user_name = models.CharField(unique=True, max_length=100)
  user_password = models.CharField(max_length=100)
  user_fk_role = models.IntegerField(default=10, blank=True)
  user_created_at = models.DateField(auto_now_add=True)
  class Meta:
    db_table = 'regist_user'  
