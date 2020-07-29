from django.db import models
from django.contrib.auth.models import User


class Bowl(models.Model):
    name = models.CharField(max_length=50)
    comment = models.TextField()
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)

    # Style choices
    TONKOTSU = 'Tonkotsu'
    MISO = 'Miso'
    SHOYU = 'Shoyu'
    SHIO = 'Shio'
    OTHER = 'Other'

    STYLE_CHOICES = [
        (TONKOTSU, 'Tonkotsu'),
        (MISO, 'Miso'),
        (SHOYU, 'Shoyu'),
        (SHIO, 'Shio'),
        (OTHER, 'Other'),
    ]

    style = models.CharField(
        max_length=20,
        choices=STYLE_CHOICES,
    )

    # Rating choices
    ONE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5

    RATING_CHOICES = [
        (ONE, '1'),
        (TWO, '2'),
        (THREE, '3'),
        (FOUR, '4'),
        (FIVE, '5'),
    ]

    rating = models.IntegerField(
        choices=RATING_CHOICES,
    )

    def __str__(self):
        return self.name
