# Generated by Django 4.2 on 2023-06-07 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0014_alter_user_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='fund',
            name='allocated_chapters_amount',
            field=models.IntegerField(default=0, null=True),
        ),
    ]