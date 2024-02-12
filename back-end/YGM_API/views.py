from django.db.models import query
from numpy import number
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import IsAuthenticated

from YGM_API import serializers
from YGM_API import models
from YGM_API import permissions

from django.shortcuts import render

class UserProfileViewSet(viewsets.ModelViewSet):
    """handle create and update"""
    serializer_class=serializers.UserProfileSerializer
    queryset=models.UserProfile.objects.all()  
    authentication_classes=(TokenAuthentication,)
    permission_classes=(permissions.UpdateOwnProfile,)
    
class UserLoginApiView(ObtainAuthToken):
    """Handle creating user authentication tokens"""
    renderer_classes=api_settings.DEFAULT_RENDERER_CLASSES

class ProfileInfoApiView(APIView):
    serializer_class=serializers.UserProfileSerializer
    authentication_classes=(TokenAuthentication,)

    def get(self,request):
        queryset=models.UserProfile.objects.filter(username=self.request.user)
        serializer=serializers.UserProfileSerializer(queryset,many=True)
        return Response(serializer.data)


class MovieViewSet(viewsets.ModelViewSet):
    serializer_class=serializers.MovieSerializer
    queryset=models.Movie.objects.all()
    filter_backends=(filters.SearchFilter,)
    search_fields=('name','brand','sex','color')


# class FilesViewSet(viewsets.ModelViewSet):
#     serializer_class=serializers.FilesSerializer
#     queryset=models.Files.objects.all()



class WatchListViewSet(viewsets.ModelViewSet):
    authentication_classes=(TokenAuthentication,)
    serializer_class=serializers.WatchListItemSerializer
    queryset=models.WatchListItem.objects.all()
    permission_classes=(
        permissions.UpdateOwnWatchList,
        IsAuthenticated
    )

    def list(self,request):
        queryset=models.WatchListItem.objects.filter(user_profile=self.request.user)
        serializer=serializers.WatchListItemSerializer(queryset,many=True)
        return Response(serializer.data)

    def perform_create(self,serializer):
        serializer.save(user_profile=self.request.user)

class PageViewSet(viewsets.ViewSet):
    serializer_class=serializers.MovieSerializer
    queryset=models.Movie.objects.all()
    
    def list(self,request):
        return Response({"list":"list"})
    
    def retrieve(self,request,pk=None):
        start_p=int(pk)-1
        end_p=start_p+1
        queryset=models.Movie.objects.all().order_by('-id')[start_p*8:end_p*8]
        serializer=serializers.MovieSerializer(queryset,many=True)
        return Response(serializer.data)

class WatchListDeleterApiView(viewsets.ViewSet):
    authentication_classes=(TokenAuthentication,)
    queryset=models.Movie.objects.all()


    def list(self,request):

        return Response({"ok":"ok"})

    def retrieve(self,request,pk=None):
        try:
            x=models.WatchListItem.objects.filter(user_profile=self.request.user,movie_saved_to_watch=pk)
            print("len : "+str(len(x)))
            if len(x)<1 :
                return Response({"status": "not found"})
            else:
                return Response({"status": "found"})
        except:
            return Response({"status":"error"})

       

    def destroy(self,request,pk=None):
        try:
            x=models.WatchListItem.objects.filter(user_profile=self.request.user,movie_saved_to_watch=pk)
            if len(x)<1:
                return Response({"status":"not found"})
            else:
                x.delete()
                return Response({"status":"sucess"})
        except:
            return Response({"status":"error"})
            
        

