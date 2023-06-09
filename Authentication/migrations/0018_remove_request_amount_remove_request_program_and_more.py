# Generated by Django 4.2 on 2023-06-08 10:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0017_remove_fund_allocated_chapters_amnt'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='request',
            name='program',
        ),
        migrations.AddField(
            model_name='request',
            name='article',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='requests', to='Authentication.article'),
        ),
        migrations.AlterField(
            model_name='article',
            name='chapter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to='Authentication.chapter'),
        ),
    ]
