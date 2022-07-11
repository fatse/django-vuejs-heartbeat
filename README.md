# Conflict-free UI with Leasing and Heartbeat using Django REST and Vue.js 

This is an initial proof of concept of how to build a conflict-free UI with Leasing and Heartbeat using Django REST and Vue.js

Content:
1. [Overview](#1-overview)
2. [Set up the working environment](#2-set-up-the-working-environment)
3. [Run Django server](#3-run-django-server)


## 1. Overview

An elegant solution to this problem is to use the "Leasing with Heartbeat " algorithm that is typically used in distributed systems for maintaining a lock on any given entity. An example distributed system that uses this algorithm is The Google File System (GFS) [paper](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf).

## 2. Set up the working environment

2.1 Clone the project repository in your machine and change the current working directory to that of the cloned project as follows:

```commandline
git clone https://github.com/fatse/django-vuejs-heartbeat.git
cd django-vuejs-heartbeat
```

2.2 Install dependencies into an isolated environment:

```commandline
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

## 3. Run Django server


From your terminal run this command to start a local web server: 

```commandline
python manage.py runserver
```

And in your terminal you will see an output similar to the one below:

```commandline
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
July 02, 2022 - 21:48:12
Django version 4.0.6, using settings 'notes_heartbeat_project.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

You can copy the url `http://127.0.0.1:8000/` from the output and paste it directly to your browser's search bar.

Alternatively, you can click at the link `http://127.0.0.1:8000/` from the output while pressing the `Command ⌘` key, and it
will open a new browser tab for the web application.
