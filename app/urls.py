from django.urls import path
from .views import *
urlpatterns = [
    path('', blank, name='Blank'),
    path('home/', home, name='Home'),
    path('about/', about, name='About'),
    path('contact/', contact, name='Contact'),
    path('feedback/', feedback, name='Feedback'),
    path('services/', services, name='Services'),
    path('test/success/', test_success, name='TestSuccess'),
    path('test/failure/', test_failure, name='TestFailure'),
]