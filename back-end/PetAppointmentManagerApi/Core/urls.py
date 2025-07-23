from django.urls import path,include
from rest_framework import routers
from .views import PetViewSet,AppointmentViewSet,RegisterApiView

router = routers.DefaultRouter()

router.register('pet',PetViewSet)
router.register('appointment',AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterApiView.as_view(), name="register")
]