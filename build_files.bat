@echo off
echo START BUILD

:: Install Python dependencies
python -m pip install -r requirements.txt

:: Apply Django migrations
python manage.py migrate

:: Collect static files
python manage.py collectstatic --noinput --clear

echo END BUILD
