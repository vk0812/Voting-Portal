# Generated by Django 4.1.7 on 2023-03-01 10:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0006_alter_candidate_email_alter_candidate_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidate',
            name='address',
        ),
    ]
