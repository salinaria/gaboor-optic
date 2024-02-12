from django.contrib import admin
from YGM_API import models
# Register your models here.

admin.site.register(models.UserProfile)
admin.site.register(models.Movie)
admin.site.register(models.WatchListItem)
