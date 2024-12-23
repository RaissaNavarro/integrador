from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_smart', '0003_contadordata_luminosidadedata_temperaturadata_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='temperaturadata',
            name='sensor',
        ),
        migrations.RemoveField(
            model_name='temperaturadata',
            name='timestamp',
        ),
        migrations.RemoveField(
            model_name='temperaturadata',
            name='valor',
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='latitude',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='localizacao',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='longitude',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='mac_address',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='observacao',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='responsavel',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='status_operacional',
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='tipo',
            field=models.CharField(choices=[('Temperatura', 'Temperatura'), ('Umidade', 'Umidade'), ('Contador', 'Contador'), ('Luminosidade', 'Luminosidade')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='temperaturadata',
            name='unidade_medida',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='latitude',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='localizacao',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='longitude',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='observacao',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='responsavel',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='status_operacional',
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='tipo',
            field=models.CharField(choices=[('Temperatura', 'Temperatura'), ('Umidade', 'Umidade'), ('Contador', 'Contador'), ('Luminosidade', 'Luminosidade')], max_length=50, null=True),
        ),
    ]
