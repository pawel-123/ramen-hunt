from django.db import models


class Bowl(models.Model):
    name = models.CharField(max_length=50)
    style = models.CharField(max_length=50)
    comment = models.TextField()

    def __str__(self):
        return self.name
