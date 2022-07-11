from telnetlib import STATUS
from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
from django.forms import SlugField
from django.urls import reverse
from django.template.defaultfilters import slugify  # new
from ckeditor.fields import RichTextField   # new
from ckeditor_uploader.fields import RichTextUploadingField     # new

# Create your models here.
STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, null=True)

    def __str__(self):
        return self.title


class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=True)
    info = models.CharField(max_length=200, null=True)
    profile_picture = models.ImageField()

    def __str__(self):
        return self.user.username


class Post(models.Model):
    title = models.CharField(max_length=300, unique=True)
    slug = models.SlugField(max_length=300, unique=True)
    content = RichTextUploadingField()
    status = models.IntegerField(choices=STATUS, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    thumbnail = models.ImageField(upload_to='images/')
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("home", args=(str(self.id)))

    # def save(self, *args, **kwargs):  # new
    #     if not self.slug:
    #         self.slug = slugify(self.title)
    #     return super().save(*args, **kwargs)


class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.body, self.name)

# class Testing(models.Model):
#     title = models.CharField(max_length=100, unique=True)
#     content = models.TextField()

#     def __str__(self):
#         return self.title
