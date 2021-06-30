# AWS-Project
Configuring a AWS web server to host a web microservice 

-	Set up AWS EC2 web server and configure different services through Virtual Hosting.
-	Configured DNS and map it with the web server using Elastic IP.
-	Uploaded the project over github and pulled the master branch to my server.
-	Created a website using OMDB API and using tech stack including CSS, JS, Bootstrap, Express, React, Node.JS etc .
-	Tech involved include AWS EC2 Ubuntu image, Elastic IP load balancer, Virtual Hosting through ApacheV2, Confd Configuration, Version Control, DNS Config and full stack for microservice.
-	This project is uploaded on the own personal web server and will be live over the domain name - www.shanmukhasrinivas.in 

# Getting started with NodeJS

- Install NodeJS [https://nodejs.org/en/](https://nodejs.org/en/)
- Check that you have __node__ and __npm__ commands in you CLI
- If your __path__ in windows has spaces, some npm libraries might fail to install.

# What is NodeJS

- NodeJS is a runtime. It executes a .js file.
- When you install node, you should get the bellow CLI utilities :
	- node -> running javascript
	- npm -> Dependency management
	- npx -> Running js cli tools

# How to install NodeJS Dependencies

- Search for dependency on [https://www.npmjs.com](https://www.npmjs.com).
- `npm install dependency-name --save`
- Make sure you are in your project folder when you execute above command.
- Running npm install automatically updates __package.json__ file.
- `npm install` -> Looks at package.json and installs all dependencies into __node_modules__

# JS Frameworks Common Patterns

- Most frameworks will have a CLI tool to build the initial codebase. Express, Angular, React included.
- Usually the starting point of execution is either index.js or main.js or app.js
- `npm run start` is the preffered way to run most most frameworks.
- You can update scripts in __package.json__ to add additional functionality. eg.
```json
 "scripts": {
    "start": "node ./bin/www",
    "debug": "nodemon ./bin/www"
  }
```

# Getting started with Express

- Express is a framework to build a server in Javascript.
- A server take a request and returns a response.
- Express Docs : [https://expressjs.com/](https://expressjs.com/)
- Express Generate Hello Workd : [https://expressjs.com/en/starter/generator.html](https://expressjs.com/en/starter/generator.html)

```bash
npx express-generator --no-view omdb-backend
cd omdb-backend
npm install
```

# Installing nodemon

- `npm install -g nodemon`
- __-g__ flag installs globally.
- Will get added to your __PATH__.

## Main purpose of package.json

- Specify scripts for starting, debugging, compiling or testing the application
- Specify versions and names of dependencies


# OMDB API

- http://www.omdbapi.com/


# Checklist

- OMDB Api Key 
- Install NodeJS
- Create an express project
- Delete everything in public folder
- Install and configure Nodemon
- Install axios npm install axios --save

## Callback explanation

```javascript
function getUsersNamefromServer() {
	// Do some things here
	// Call server and get user's name
	// 10 seconds -> We have to make it async
	// return name; // return is a synchronus operation. Cannot use return when data is asynchronously obtained
	// Problem statement -> Better approach to return data
}

function getUsersNamefromServer(callback) {
	// Dummy code to explain a callback function
	// Instead of returning data
	// We pass in a function
	// That is called when data is available
	// This is generally called a callback function
	browserApi.get('url', function(userName) {
		callback(userName)
	})
}

getUsersNamefromServer(function(userName) {
	console.log(userName)
})
```

## Returning data from async functions

1. Callback -> Pass in a callback function having signature (err, data) => {}
2. Promises -> You have to do a .then() -> Axios has this syntax
3. async/await -> Cleaner syntax over promises -> Even newer might have this syntax
4. Rxjs
