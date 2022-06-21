from operator import index
from unicodedata import category
from django.shortcuts import render
from .models import Post, Author, Category
from django.views.generic import ListView, DetailView, TemplateView


# Create your views here.

# def index(req):
#     return render(req, 'index.html', {})

class PostList(ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_at')
    categories = Category.objects.all()[0:3]
    template_name = "index.html"


class PostDetail(DetailView):
    model = Post
    template_name = "single-blog-center.html"


class AboutPageView(TemplateView):
    template_name = 'about.html'
