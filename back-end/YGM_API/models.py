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
    username=models.CharField(max_length=255,unique=False)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)

    objects=UserProfileManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    def __str__(self):
        return self.username
    

class Glass(models.Model):
    name = models.CharField(max_length=512,unique=False)
    sku_id = models.CharField(max_length=512,unique=True)
    brand = models.CharField(max_length=64,unique=False)
    price = models.FloatField(default=0)
    sex=models.CharField(max_length=32,default="هردو")
    color = models.CharField(max_length=64,unique=False)
    def __str__(self):
        return self.name


class BasketListItem(models.Model):
    user_profile=models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    glass_saved_to_basket=models.ForeignKey(
        Glass,
        on_delete=models.CASCADE
    )


