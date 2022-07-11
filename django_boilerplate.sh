#!/bin/bash
# Step 0: Create a new directory in which our Django project will live, along with the virtual environment.
mkdir django-vuejs-heartbeat
cd django-vuejs-heartbeat

# Step 1: Create a new virtual environment
python3 -m venv env

# Step 2: Activate the new virtual environment
source env/bin/activate

# Step 3: Install Django and Django restframework
pip install Django
pip install djangorestframework

# Step 4: Create a new Django project called "notes_heartbeat"
django-admin startproject notes_heartbeat

# Step 5: Create a new Django application within our Django project project called "notes_app"
cd notes_heartbeat
python manage.py startapp notes_app

# Step 6: Create the initial database tables
python manage.py makemigrations
python manage.py migrate

# Step 7: Run our basic Django application
python manage.py runserver
