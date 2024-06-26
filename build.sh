#!/bin/bash
echo "START BUILD"

# Ensure the Python environment is set up
python3.9 -m venv vercel-env
source vercel-env/bin/activate

# Install dependencies
python3.9 -m pip install -r requirements.txt

# Apply migrations
python3.9 manage.py migrate

# Collect static files
python3.9 manage.py collectstatic --noinput --clear

echo "END BUILD"
