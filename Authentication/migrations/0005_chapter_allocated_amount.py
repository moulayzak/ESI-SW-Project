# Generated by Django 4.2 on 2023-06-07 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0004_remove_chapter_allocated_amount'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapter',
            name='allocated_amount',
            field=models.IntegerField(default=0),
        ),
    ]
