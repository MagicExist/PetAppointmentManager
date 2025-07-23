from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pet,Appointment
from .serializer import PetSerializer,AppointmentSerializer
from django.contrib.auth.models import User

# Create your views here.

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class RegisterApiView(APIView):
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            return Response({"error": "Username and Password required"},status=400)
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=400)
        user = User.objects.create_user(username=username,password=password)
        return Response({"message":"User created"},201)


