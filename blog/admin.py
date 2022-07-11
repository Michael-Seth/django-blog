from django.contrib import admin
from .models import Comment, Post, Author, Category

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_at')
    search_fields = ['title', 'content']


class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'body', 'post', 'created_on', 'active')
    list_filter = ('active', 'created_on')
    search_fields = ('name', 'email', 'body')
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(active=True)


admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Comment, CommentAdmin)
