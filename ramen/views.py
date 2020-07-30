from .models import Bowl
from .serializers import BowlSerializer
from rest_framework import generics, filters


class BowlListCreate(generics.ListCreateAPIView):
    queryset = Bowl.objects.all()
    serializer_class = BowlSerializer
    # allows filtering DRF API by date added
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['date_added']
