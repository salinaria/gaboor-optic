from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from django.core.files import File
from YGM_API import models

class UserProfileSerializer(serializers.ModelSerializer):
    """Serializes a user profile object"""
    
    class Meta:
        model=models.UserProfile
        fields=('id','email','username','password')
        extra_kwargs={
            'password':{
                'write_only':True,
                'style':{'input_type':'password'} 
            }
            
        }
    
    def create(self,validated_data):
        """Create and return a new user"""
        user=models.UserProfile.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )

        return user

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Movie
        fields=('name',
            'sku_id',
            'brand',
            'price',
            'sex',
            'color',
            'image',)
            # 'sku_file',
            # 'plastic',
            # 'model3d',
            # 'metal',
            # 'glass')

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        tmp=models.Movie.objects.filter(pk=instance.id)
        final_string=tmp[0].name
        for ii in range(1,len(tmp)):
            final_string+=" , "+tmp[ii].name
        # f=open(tmp[0].image)
        # rep["cast"]=File(f)
        return rep


# class FilesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.Files
#         fields=['id','image']
        
class WatchListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.WatchListItem
        fields=('id','user_profile','movie_saved_to_watch')
        extra_kwargs={'user_profile':{'read_only':True}}
        unique_together = (('user_profile', 'movie_saved_to_watch'),)

    def to_representation(self,instance):
        rep=super().to_representation(instance)
        print(instance.movie_saved_to_watch.id)
        tmp_movie=models.Movie.objects.filter(pk=instance.movie_saved_to_watch.id)
        rep['movie_details']=MovieSerializer(tmp_movie,many=True).data
        return rep
