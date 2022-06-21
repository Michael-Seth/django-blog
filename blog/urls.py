from django.urls import path
from . import views

# Create views here
# urlpatterns = [
#     path('', views.index),  # App homepage
# ]
urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path("<slug:slug>/", views.PostDetail.as_view(), name='details_page'),
    path('about/', views.AboutPageView.as_view(), name='about')
]
