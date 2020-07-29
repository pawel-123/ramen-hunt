from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Bowl


class BowlSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bowl
        fields = ('id', 'name', 'style', 'comment',
                  'rating', 'author')
        depth = 1
