# Generated by Django 4.2 on 2023-06-07 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0013_alter_transaction_payment_method'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='address',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]