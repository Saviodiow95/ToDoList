from django.urls import path

from . import views

urlpatterns = [
    path('about/', views.aboutView, name="about-view"),
   
]
