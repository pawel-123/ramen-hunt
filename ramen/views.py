from .models import Bowl
from .serializers import BowlSerializer
from rest_framework import generics


class BowlListCreate(generics.ListCreateAPIView):
    queryset = Bowl.objects.all()
    serializer_class = BowlSerializer
