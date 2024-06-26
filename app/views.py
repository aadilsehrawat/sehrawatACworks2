from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages

from app.data import allservices, testimonials
# Create your views here.
def blank(request):
    return redirect('Home')

def home(request):
    if request.method == 'POST':
        if 'quote_form_submit' in request.POST:
            name = request.POST['name']
            phone = request.POST['email']
            email = request.POST['email']
            message = request.POST['message']
            print(name, phone, email, message)
            messages.success(request, 'Thank you! We have recieved your quote request. We will get back to you soon with your quote.')
            return redirect('Home')
        if 'booking_form_submit' in request.POST:
            name = request.POST['name']
            date = request.POST['date']
            phone = request.POST['phone']
            email = request.POST['email']
            address = request.POST['address']
            print(name, date, phone, email, address)
            messages.success(request, 'Thank you for your booking! Somone from our team will speak with you soon.')
            return redirect('Home')
    return render(request, 'app/home.html', {'active_tab': 'home', 'services': allservices[:6], 'testimonials': testimonials})

def about(request):
    return render(request, 'app/about.html', {'active_tab': 'about'})

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = request.POST['email']
        email = request.POST['email']
        message = request.POST['message']
        print(name, phone, email, message)
        messages.success(request, 'Thank you for contacting us! We will get back to you soon with your request.')
        return redirect('Home')
    return render(request, 'app/contact_us.html', {'active_tab': 'contact'})

def services(request):
    if request.method == 'POST':
        name = request.POST['name']
        date = request.POST['date']
        phone = request.POST['phone']
        email = request.POST['email']
        address = request.POST['address']
        print(name, date, phone, email, address)
        messages.success(request, 'Thank you for your booking! Somone from our team will speak with you soon.')
        return redirect('Home')
    return render(request, 'app/services.html', {'active_tab': 'services', 'services': allservices})

def feedback(request):
    if request.method == 'POST':
        name = request.POST['name']
        designation = request.POST['designation']
        message = request.POST['message']
        print(name, designation, message)
        messages.success(request, 'Thank you for your feedback!')
        return redirect('Home')
    return render(request, 'app/feedback.html')

def test_success(request):
    messages.success(request, 'This is an example success message.')
    return render(request, 'app/home.html')

def test_failure(request):
    messages.error(request, 'This is an example error message.')
    return render(request, 'app/home.html')