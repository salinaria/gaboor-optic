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
        fields=('id','name',
            'sku_id',
            'brand',
            'price',
            'sex',
            'color',)

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        tmp=models.Movie.objects.filter(pk=instance.id)
        final_string=tmp[0].name
        for ii in range(1,len(tmp)):
            final_string+=" , "+tmp[ii].name
        # f=open(tmp[0].image)
        similars=models.Movie.objects.filter(color=tmp[0].color) | models.Movie.objects.filter(color=tmp[0].color,sex="هردو")
        similars=similars.exclude(id=tmp[0].id)
        # print(similars)
        # rep["recommended"]=str(similars[0].sku_id)+","+str(similars[1].sku_id)+","+str(similars[2].sku_id)
        
        d1={}
        d2={}
        d3={}
        d1["id"]=similars[0].id
        d1["name"]=similars[0].name
        d1["sku_id"]=similars[0].sku_id
        d1["price"]=similars[0].price
        d1["brand"]=similars[0].brand
        d1["sex"]=similars[0].sex
        d1["color"]=similars[0].color
        d2["id"]=similars[1].id
        d2["name"]=similars[1].name
        d2["sku_id"]=similars[1].sku_id
        d2["price"]=similars[1].price
        d2["brand"]=similars[1].brand
        d2["sex"]=similars[1].sex
        d2["color"]=similars[1].color
        d3["id"]=similars[2].id
        d3["name"]=similars[2].name
        d3["sku_id"]=similars[2].sku_id
        d3["price"]=similars[2].price
        d3["brand"]=similars[2].brand
        d3["sex"]=similars[2].sex
        d3["color"]=similars[2].color
                
        rep["recommended"]=[d1,d2,d3]
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
