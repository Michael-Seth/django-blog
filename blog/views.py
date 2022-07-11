from operator import index
from unicodedata import category
from django.shortcuts import render
from django.urls import reverse
from .models import Post, Author, Category
from django.views.generic import ListView, DetailView, TemplateView, CreateView


class PostList(ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_at')
    # categories = Category.objects.all()
    context_object_name = "post_list"
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in a QuerySet of all the posts
        context['categories_list'] = Category.objects.all()
        # context['posts_list'] = Post.objects.all()
        return context


class PostDetail(DetailView):
    model = Post
    queryset = Post.objects.all()
    template_name = "blog_content.html"
    context_object_name = "blog_content"


class AboutPageView(TemplateView):
    template_name = 'about.html'


class CreateBlogView(CreateView):
    model = Post
    template_name = "create.html"
    fields = "__all__"

    def get_success_url(self):
        return reverse('blog:detail', args=[self.object.pk])
