from django.urls import path
from django.views.generic import TemplateView
from .views import IndexView, get_model_details

app_name = "visualizer"
urlpatterns = [
    path("", IndexView.as_view()),
    path('model/<int:pk>/', get_model_details, name='modelDetail')
]
