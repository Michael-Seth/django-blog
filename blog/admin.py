from django.contrib import admin
from .models import Post, Author, Category

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'created_at')
    search_fields = ['title', 'content']


admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Category)
