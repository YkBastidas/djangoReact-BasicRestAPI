# Generated by Django 3.0.2 on 2020-01-28 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegistUser',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=30, unique=True)),
                ('user_password', models.CharField(max_length=64)),
                ('user_created_at', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'regist_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='UserRole',
            fields=[
                ('role_id', models.AutoField(primary_key=True, serialize=False)),
                ('role_name', models.CharField(max_length=50, unique=True)),
                ('role_created_at', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'user_role',
                'managed': False,
            },
        ),
    ]
