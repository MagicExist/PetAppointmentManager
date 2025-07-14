from rest_framework import serializers
from .models import Pet,Appointment

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'