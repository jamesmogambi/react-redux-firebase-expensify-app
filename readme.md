# Expensify
>Application for managing user expenses.

## Table of contents
* [Description](#description)
* [Live Demo](#live-demo)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [App Info](#app-info)


## Description
Expensify Application is a serverless application built with React for front-end and Firebase by Google for backend services.
This is an adaptation from an online course that I took on  [Udemy.com](https://www.udemy.com/) . 
Expensify implements Google Authentication thus allowing users to sign in with their valid google accounts.


## Live Demo
Here is a working live demo : [expensify](https://expensify-app-2021.firebaseapp.com/) 


## Screenshots

### Index

![index](https://user-images.githubusercontent.com/31744209/102399286-7e167000-3ff1-11eb-924f-a26a4a665aae.png)


### View Expenses
![expenses](https://user-images.githubusercontent.com/31744209/102399302-82428d80-3ff1-11eb-953d-314170495fad.png)

### Add Expense
![add-expensify](https://user-images.githubusercontent.com/31744209/102399297-81116080-3ff1-11eb-88d2-2aceaba00846.png)


### Edit Expense
![edit-expense](https://user-images.githubusercontent.com/31744209/102399300-81a9f700-3ff1-11eb-8fae-ccf02395250d.png)

## Technologies
* Technologies used:
  * `React` 15.6 - for displaying UI components
  * `Redux` 3.7 -  predictable state container for managing application state
  * `Webpack` 3.1 - module bundler for this application 
  * `Express` 4.1 - middleware is used to handle requests, routes
  * `Jest` 20.0 - testing framework for Javascript codebase, specifically React for this application.
  * `Firebase` 8.2 - provides serverless environment for this application



 ## Setup
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.


###  Clone repo
Run the following scripts in the terminal to clone the repo
```
$ git clone git@github.com:jamesmogambi/react-redux-firebase-expensify-app.git
$ cd react-redux-firebase-expensify-app
```

----------------------------------


### Add a  .env.development file in root folder with the following

```
{
  "FIREBASE_API_KEY": "<your_firebase_api_key>",
  "FIREBASE_AUTH_DOMAIN": "<your_firebase_auth_domain>",
  "FIREBASE_DATABASE_URL": "<your_firebase_database_url>",
  "FIREBASE_PROJECT_ID": "<your_firebase_project_id>",
  "FIREBASE_STORAGE_BUCKET": "<your_firebase_storage_bucket>",
  "FIREBASE_MESSAGING_SENDER_ID": "<your_firebase_messaging_sender_id>",
  "FIREBASE_APP_ID": "<your_firebase_app_id>",
  "FIREBASE_MEASUREMENT_ID": "<your_firebase_measurement_id>",
 }
```



### Install  dependencies

```bash
npm install
```


### Run App

```bash
npm run dev-server
```
Runs the app in the development mode.<br>
The page will reload if you make edits.<br>

### Run Tests
```bash
npm run test
```
Launches the test runner in the interactive watch mode.<br>

### Build for production

```bash
npm run build-prod
```



### Test production before deploy

After running a build 👆, run the following script...


```bash
npm run start
```

### Deploy to Heroku 
To deploy the build to Heroku run the following script...

```bash
npm run heroku-postbuild
```



## Features
List of features:
* Create expense
* View expenses
* Update expense
* Search expenses
* Filter expenses by Date, amount
* Sort expenses
* Google Authentication



## App Info

### Author

James Mogambi
[James Mogambi](https://github.com/jamesmogambi)

### Version

2.0.0

### License

This project is licensed under the MIT License

