from django.urls import path
from .views import PostList, CreateBlogView, AboutPageView, PostDetail
from django.conf import settings
from django.conf.urls.static import static

# Create views here
# urlpatterns = [
#     path('', views.index),  # App homepage
# ]
urlpatterns = [
    path('', PostList.as_view(), name='home'),
    path("create/", CreateBlogView.as_view(), name='create'),
    path('about/', AboutPageView.as_view(), name='about'),
    path("<slug:slug>/", PostDetail.as_view(), name='blog_content'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
