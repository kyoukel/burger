# burger | Node Express Handlebars

## Overview:
> Created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!) following the MVC design pattern and using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

### To Start the App:
In the terminal - Launch Nodemon to start the app & listen to the server
Then type localhost:5505

## Before You Begin
> Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

> Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. 

> Your app will store every burger in a database, whether devoured or not.

### App Setup
- [x] Create a GitHub repo called burger and clone it to your computer.
- [x] Make a package.json file by running npm init from the command line.
- [x] Install the Express npm package: npm install express.
- [x] Create a server.js file.
- [x] Install the Handlebars npm package: npm install express-handlebars.
- [x] Install the body-parser npm package: npm install body-parser.
- [x] Install MySQL npm package: npm install mysql.
- [x] Require the following npm packages inside of the server.js file:
    * express
    * body-parser

### DB Setup
Inside your burger directory, create a folder named db.
- [x] In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
    * Create the burgers_db.
    * Switch to or use the burgers_db.
    * Create a burgers table with these fields:
        * id: an auto incrementing int that serves as the primary key.
        * burger_name: a string.
        * devoured: a boolean.
- [x] Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.
- [x] Run the schema.sql and seeds.sql files into the mysql server from the command line
- [x] Now you're going to run these SQL files.

**Make sure you're in the db folder of your app.**
1. Start MySQL command line tool and login: mysql -u root -p.
2. With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
3. Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
4. Close out of the MySQL command line tool: exit.

### Config Setup
- [x] nside your burger directory, create a folder named config.
- [x] Create a connection.js file inside config directory.
- [x] Inside the connection.js file, setup the code to connect Node to MySQL.
- [x] Export the connection.
- [x] Create an orm.js file inside config directory.
- [x] Import (require) connection.js into orm.js
- [x] In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
* selectAll()
* insertOne()
* updateOne()
- [x] Export the ORM object in module.exports.

### Model setup
- [x] Inside your burger directory, create a folder named models.
- [x] In models, make a burger.js file.
- [x] Inside burger.js, import orm.js into burger.js
- [x] Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
- [x] Export at the end of the burger.js file.

### Controller setup
- [x] Inside your burger directory, create a folder named controllers.
- [x] In controllers, create the burgers_controller.js file.
- [x] Inside the burgers_controller.js file, import the following:
    * Express
    * burger.js
- [x] Create the router for the app, and export the router at the end of your file.

### View setup
- [x] Inside your burger directory, create a folder named views.
- [x] Create the index.handlebars file inside views directory.
- [x] Create the layouts directory inside views directory.
- [x] Create the main.handlebars file inside layouts directory.
- [x] Setup the main.handlebars file so it's able to be used by Handlebars.
- [x] Setup the index.handlebars to have the template that Handlebars can render onto.
- [x] Create a button in index.handlebars that will submit the user input into the database.

### Directory structure
All the recommended files and directories from the steps above should look like the following structure:

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

## eat-da-burger!