# Generated by Django 4.1.7 on 2023-03-01 10:34

import django.contrib.auth.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0005_remove_candidate_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='Profile Picture'),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='user',
            field=models.CharField(max_length=100, verbose_name=django.contrib.auth.models.User),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='votes',
            field=models.IntegerField(default=0, verbose_name='votes'),
        ),
    ]
