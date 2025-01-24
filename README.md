# Project Documentation - Marketplace Web Application
## Distinctiveness and Complexity
This project is an online marketplace platform built with Django that allows users to buy and sell items. Key unique features include:

•	Real-time conversation system between buyers and sellers

•	Dashboard for managing items and conversations

•	Category-based browsing and search functionality

•	User authentication and authorization

•	Image upload and management

The complexity comes from:

•	Managing multiple related database models (User, Item, Conversation, etc.)

•	Implementing real-time messaging between users

•	Handling file uploads and media storage

•	Building a responsive front-end interface

Design Approach

I used Django's MVT (Model-View-Template) architecture:

•	Models: Define data structure using Django ORM

•	Views: Handle business logic and request/response flow

•	Templates: Render dynamic HTML interfaces

Key design decisions:

•	Separated functionality into distinct apps (conversation, dashboard, item)

•	Used class-based views for consistent code organization

•	Leveraged Django forms for data validation

•	Implemented authentication middleware for security

File Contents

Main files created:

Models

•	item/models.py: Item and Category models

•	conversation/models.py: Conversation and Message models

Views

•	item/views.py: Browse, search, create, edit items

•	conversation/views.py: Message inbox and chat

•	dashboard/views.py: User dashboard functionality

Templates

•	item/templates/: Item listing and detail pages

•	conversation/templates/: Messaging interface

•	dashboard/templates/: Dashboard view

Running the Application

1.	Create virtual environment:
   
  python -m venv env
  source env/bin/activate  # Linux/Mac
  env\Scripts\activate 

3.	Run Migrations
   
  python manage.py migrate

5.	Start development Server
   
  python manage.py runserver

7.	Visit http://127.0.0.1:8000/ in your browser
