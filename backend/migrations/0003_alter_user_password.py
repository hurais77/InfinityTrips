# Generated by Django 4.1.10 on 2023-07-07 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=100),
        ),
    ]
