from django.urls import path
from . import views

urlpatterns = [
    path('api/bowl/', views.BowlListCreate.as_view()),
]
