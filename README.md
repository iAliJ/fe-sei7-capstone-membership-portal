# Membership Portal Web App

web application for clients that serves as a membership portal, connecting companies and members by offering various benefits and organizing events. This platform will facilitate seamless interaction between businesses and their members, enhancing their engagement through exclusive perks and activities.

## App Screenshots

<img width="1329" alt="image" src="https://github.com/mmaskati/fe-sei7-capstone-membership-portal/assets/47180374/1c8f0923-f657-476a-91ed-2a3b7b8af90f">

<img width="1440" alt="image" src="https://github.com/mmaskati/fe-sei7-capstone-membership-portal/assets/47180374/7bbb45cb-0ad1-46b9-bd1f-b43be3355d4e">

<img width="1440" alt="image" src="https://github.com/mmaskati/fe-sei7-capstone-membership-portal/assets/47180374/1a604c86-f673-47e6-b610-b6174bf9931b">

<img width="1440" alt="image" src="https://github.com/mmaskati/fe-sei7-capstone-membership-portal/assets/47180374/e434a17d-97f9-424f-a563-101961128415">

## Technology Stack

The client app is powered by NodeJS, ReactJS and Bootstrap. For information about the backend stack refer to the [backend repo](https://github.com/mmaskati/be-sei7-capstone-membership-portal)

## Dependencies

add `proxy` field in `package.json` that points to backend url.

run `npm i` to install all required dependencies, these dependencies are:

* axios
* react-router-dom 
* react-bootstrap
* fontawesome/fontawesome-svg-core
* fontawesome/free-solid-svg-icons
* fontawesome/react-fontawesome

## Wireframes
https://app.diagrams.net/#G1vBYXIxjdF9zCYnln7T8lfdi-wbU6Cr0P#%7B%22pageId%22%3A%22DMXEUu-AOoocjwIExP6m%22%7D

## User Stories
### User
* As a User, I should be able to sign up and sign in.
* As a User, I should be able to see all benefits.
* As a User, I should be able to use a benefit.
* As a User, I should be able to register for an event.
### Organization Owner
* As an organization I should be able to create an organization.
* As an organization I should be able to create an account for my organization's members.
## Features

* User signup and Login
* Edit user profile
* Responsive design
* Organization registration
* Members can add benefits and browse other benefits to redeem
* Members can redeem benefits using QR codes
* Members can view the list of events to register and attend
* Members can view all registered companies directory for networking
* Members can invite other members

## Future Plan

* Plan upgrade and payment methods
* Search page for directories, events, and benefits
* View company location via Google Maps

## List of Unsolved Problems
* Reset password form needs to be adjusted and fixed.
* User profile updates but the user needs to log out and log in to see the updated data.
