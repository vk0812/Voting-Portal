from django.contrib import admin
from django.urls import path, include
from portal import views
urlpatterns = [
    path('info/', views.info),
    path('vote/', views.Vote),

]
