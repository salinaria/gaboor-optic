from django.db import router
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from YGM_API import views
from django.conf.urls import static
from django.conf import settings
router=DefaultRouter()
router.register('profile',views.UserProfileViewSet) 
router.register('glass',views.GlassViewSet)


router.register('basketlist',views.BasketListViewSet)
router.register('page',views.PageViewSet)
router.register('delbasket',views.BasketListDeleterApiView)
# router.register('files',views.FilesViewSet,basename='files')




urlpatterns = [
    path('',include(router.urls)),
    path('login/',views.UserLoginApiView.as_view()),
    path('account/',views.ProfileInfoApiView.as_view()),
]
