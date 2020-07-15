from rest_framework import serializers
from .models import Bowl


class BowlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bowl
        fields = ('id', 'name', 'style', 'comment', 'rating')
