### GOV.UK express

This is a working NodeJS (express) web application that uses the [GOV.UK frontend](https://github.com/alphagov/govuk-frontend) 
and adheres to the [GOV.UK Design System](https://design-system.service.gov.uk).

It also acts as the standard for how an express project should be structured, and what files are expected.  

It can be copied and used at the starting point for any new web app.

### Project structure

NodeJS services in the MCA follow the express [routes/controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) 
pattern, along with with [service classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) that CRUD data. 

    src
    +-- bin
    |   -- www
    |   controllers    
    |   routes    
    |   views
    |   services
    |   ...    
    test
    --- web
    --- services
    --- ...
 

##### Expected project files

Each project should have the following files:

Name                        | Purpose
----------------------------|-----------------------------------------------
README.md                   | Explanation of the module and how to use it 
package.json                | For building with `npm`
Dockerfile                  | To build a Docker image
docker-compose.yml          | To run the Docker image and all dependencies
www                         | To start the service
.gitignore                  | Files to be ignored from SCM

### Prerequisites and setup

Developers should install the following on their machines:

* [NodeJS](https://nodejs.org/en/download)
* [Docker](https://docs.docker.com/install)
* [Docker Compose](https://docs.docker.com/compose/install/)

Environment variables are defined in the `.env.example` file. This should be copied locally into
`.env` but NOT commited.

### View templating 

This project uses [nunjucks](https://mozilla.github.io/nunjucks/) for its view templating.  

### Commands

##### Development        

Install the dependencies

    npm install grunt -g
    npm install nyc -g
    npm install

Test (first start `animals-api` service)

    npm test
    
Run locally 
  
    npm start

##### Docker  

Prerequisites
  animals-api repo
     
     1. mvn clean build - to create the .jar file
     2. docker build -t animals-service:latest to build the image
  animals-ui repo
     3. docker-compose up

### Accessing locally

The service will be available at http://localhost:2997/