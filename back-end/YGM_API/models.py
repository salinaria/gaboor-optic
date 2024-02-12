from django.db import models
from django.contrib.auth.models import AbstractBaseUser, User
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.conf import settings
from django.db.models.deletion import CASCADE

import os
class UserProfileManager(BaseUserManager):
    def create_user(self,email,username,password=None):
        if not email or not username:
            raise ValueError('not valid')
        
        email=self.normalize_email(email)
        user=self.model(email=email,username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self,email,username,password):
        user=self.create_user(email,username,password)
        user.is_superuser=True
        user.is_staff=True
        user.save(using=self._db)
        return user

class UserProfile(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(max_length=255,unique=True)
    username=models.CharField(max_length=255,unique=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)

    objects=UserProfileManager()

    USERNAME_FIELD='username'
    REQUIRED_FIELDS=['email']

    def __str__(self):
        return self.username
    

class Movie(models.Model):
    name = models.CharField(max_length=128,unique=False)
    sku_id = models.CharField(max_length=512,unique=True)
    brand = models.CharField(max_length=64,unique=False)
    price = models.FloatField(default=0)
    sex=models.IntegerField(default=0)
    color = models.CharField(max_length=64,unique=False)
    # image = models.FilePathField(path=os.path.join(settings.LOCAL_FILE_DIR,"images"))
    image=models.CharField(max_length=712,unique=False)
    # sku_file=models.FileField(upload_to="store/sku/")
    # plastic=models.FileField(upload_to="store/materials/plastic/",blank=True)
    # model3d=models.FileField(upload_to="store/models3D/",blank=True)
    # metal=models.FileField(upload_to="store/materials/metals/",blank=True)
    # glass=models.FileField(upload_to="store/materials/glasses/",blank=True)
    def __str__(self):
        return self.name

# class Files(models.Model):
#     image=models.FileField(upload_to='store/images/')
#     def __str__(self):
#         return self.image

class WatchListItem(models.Model):
    user_profile=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    movie_saved_to_watch=models.ForeignKey(
        Movie,
        on_delete=models.CASCADE
    )


