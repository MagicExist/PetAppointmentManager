from django.db import models

# Create your models here.
class Pet(models.Model):
    name = models.CharField(max_length=100)
    race = models.CharField(max_length=50)
    age = models.IntegerField()

    def __str__(self):
        return self.name

class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    priority = models.CharField(max_length=20, default='low')
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE,related_name='appointment')
    
    def __str__(self):
        return f"{self.pet.name} Appointment"