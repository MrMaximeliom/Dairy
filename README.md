# [Diary API](https://github.com/MrMaximeliom/Dairy.git)

**Diary API** is an API developed using nodejs and express technologies, with other libraries from the npm respository. It provides the required api for a simple 
diary application that allows the users to create their own profiles and write their daily diaries and choose favourits from them. The API was built to achive the maximum efficiency, speed and minimal latency.



<br />

> Features


- `NodeJS version`: **v18.2.0**
- Uses **Sequelize** package as ORM with support to **Postgresql** database
- Modular design, clean codebase
- Token-Based Authentication using JWT
- Support via **Github**

<br />

## ✨ Code-base structure

The project is coded using a simple and intuitive structure presented below:

```bash
< PROJECT ROOT >
   |
   |-- config/                               
   # Implements app configuration
   |    |-- config.json                    
   # Defines the required parameters for the sequelize package to connect to the database engine 
   |    |-- auth.config.py                        
   # Defines the secret key used to generate tokens
   |
   |-- controllers/
   # Implements the conrollers that is used in each endpoint
   |    |
   |    |-- auth.controller.js/                          
   # Implements the required controllers for sign-up and sign-in endpoints
   |    |-- user.controller.js                  
   # Implements the required controllers for the endpoints that provides the CRUD operations of the users
   |    |
   |    |-- middleware/                
   # Contains all the middlewars that are used in controllers and other sections, and provides the functionality to handle many use-cases
   |    |    |-- index.js                
    # makes the middlewars exported to be used in other parts of the application
   |    |    |-- authJwt.js                   
   # Implements the functions used in the process of verifing tokens and contains special restricting access functions used to limit users access to the endpoints
   |    |    |-- verifySignUp.js          
   # Implements the functions used in the processes of signing up and signing in endpoints 
   |    |
   |    |-- migrations/
   # Contains the migrations files used by sequelize to manage the databse engine 
   |    |-- models/                     
   # Contains the files that represents the tables in the database, each defines the structre of the table and its coloumns and associations
   |    |    |-- index.js                
    # makes the models exported to be used in other parts of the application
   |    |    |-- note.js                
    # defines the model named 'note' and its coloumns and associations
   |    |    |-- role.js                
   # defines the model named 'role' and its coloumns and associations
   |    |    |-- user.js                
   # defines the model named 'user' and its coloumns and associations
    |    |-- routes/
   # Contains the routes for the endpoints in the API 
   |    |    |-- index.js                
    # makes the routes exported to be used in other parts of the application
   |    |    |-- notes.js                
    # defines the endpoints for the model named 'note'
   |    |    |-- user.routes.js                
   # defines the endpoints for the model named 'user'
   |    |    |-- users.js                
   # defines the endpoints for the model named 'user'
   |    |-- src/                     
   # Contains only index file which represents the start point of the application
   |    |    |-- index.js                
   # represents the starting point of the application, used to define the required setups and steps to make the application works , usually contains the definition of the main function and contains the listenting functions and other middlewares
   |    |-- .babelrc
   # contains a setup for the babel package
   |    |-- .env/
   # contains the configuration keys used via environment
   |    |-- diary_database_model.mwb
   # contains the definition of the ERD model of database design for diary endpoint
   |    |-- package.json
   # detailed file contains information about the application and its dependencies, and other information about the app
   |    |-- start_guides.txt   
   # contains guids for reusable commands when working with sequelize package
   ************************************************************************
```

<br />

> The bootstrap flow

- Django bootstrapper `manage.py` uses `core/settings.py` as the main configuration file
- `core/settings.py` loads the app magic from `.env` file
- Redirect the guest users to Login page
- Unlock the pages served by *app* node for authenticated users

<br />

## ✨ Deployment

The app is provided with a basic configuration to be executed in [Docker](https://www.docker.com/), [Gunicorn](https://gunicorn.org/), and [Waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/).

### [Gunicorn](https://gunicorn.org/)
---

Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX.

> Install using pip

```bash
$ pip install gunicorn
```
> Start the app using gunicorn binary

```bash
$ gunicorn --bind=0.0.0.0:8001 core.wsgi:application
Serving on http://localhost:8001
```

Visit `http://localhost:8001` in your browser. The app should be up & running.


<br />

### [Waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/)
---

Waitress (Gunicorn equivalent for Windows) is meant to be a production-quality pure-Python WSGI server with very acceptable performance. It has no dependencies except ones that live in the Python standard library.

> Install using pip

```bash
$ pip install waitress
```
> Start the app using [waitress-serve](https://docs.pylonsproject.org/projects/waitress/en/stable/runner.html)

```bash
$ waitress-serve --port=8001 core.wsgi:application
Serving on http://localhost:8001
```

Visit `http://localhost:8001` in your browser. The app should be up & running.

<br />

## ✨ Credits & Links

### [Django Admin Dashboards](https://appseed.us/admin-dashboards/django)

Index with UI-ready **admin dashboards** generated by the AppSeed platform in [Django Framework](https://www.djangoproject.com/).
Start fast your next Django project by using functional admin dashboards enhanced with Database, ORM, authentication flow, helpers and deployment scripts.

<br />

### [What is Django](https://docs.appseed.us/content/what-is/django)

[Django](https://www.djangoproject.com/) is a Python-based free and open-source web framework, which follows the model-template-view architectural pattern. It is maintained by the Django Software Foundation, an independent organization established as a 501 non-profit. Django's primary goal is to ease the creation of complex, database-driven websites.

<br />

### What is a dashboard

A dashboard is a set of pages that are easy to read and offer information to the user in real-time regarding his business. A dashboard usually consists of graphical representations of the current status and trends within an organization. Having a well-designed dashboard will give you the possibility to act and make informed decisions based on the data that your business provides - *definition provided by [Creative-Tim - Free Dashboard Templates](https://www.creative-tim.com/blog/web-design/free-dashboard-templates/?ref=appseed)*.

<br />

### Datta Able Free Dashboard

Datta Able Bootstrap Lite is the most styled Bootstrap 4 Lite Admin Template, around all other Lite/Free admin templates in the market. It comes with high feature-rich pages and components with fully developer-centric code. Comes with error/bug-free, well structured, well-commented code and regularly with all latest updated code, which saves your large amount of developing backend application time and it is fully customizable. - provided by **CodedThemes**.

<br />

---
[Datta Able Django](https://appseed.us/admin-dashboards/django-datta-able) - Provided by **AppSeed [App Generator](https://appseed.us/app-generator)**.
