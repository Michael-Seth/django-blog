from telnetlib import STATUS
from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
from django.forms import SlugField
from django.urls import reverse
from django.template.defaultfilters import slugify  # new

# Create your models here.
STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class Category(models.Model):
    title = models.CharField(max_length=30)
    slug = models.SlugField()

    def __str__(self):
        return self.title


class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField()

    def __str__(self):
        return self.user.username


class Post(models.Model):
    title = models.CharField(max_length=300, unique=True)
    slug = models.SlugField(max_length=300, unique=True)
    content = models.TextField()
    status = models.IntegerField(choices=STATUS, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    thumbnail = models.ImageField(upload_to='images/')
    categories = models.ManyToManyField(Category)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("details_page", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

# class Testing(models.Model):
#     title = models.CharField(max_length=100, unique=True)
#     content = models.TextField()

#     def __str__(self):
#         return self.title
