# ET3-Driver
An online Bus Registeration app

## The Application deployed on heroku
>https://et3driverapp.herokuapp.com/

## API Documentation
>https://documenter.getpostman.com/view/4868809/UVeMGNXz#24df0824-b00d-4d04-836e-f530c0c6c089

## Prerequisite
>nodejs v16.13.1 

>mongodb

>reactjs

## Installtion
   Cloning to the project: 
   
      https://github.com/Y-Tarek/ET3-Driver.git
          
     
   then run: 
      
      npm install 
      
    
   then go inside client folder:
        
        npm install
        
     
  then retrun to main
  
      cd ..
      
      
   then create a .env file and provide these environment variables inside it
   
       NODE_ENV = development || production
       PORT = 5000 you can specify any other port number but for that you have to go inside the client folder and go package.json you will find proxy value just remove 5000
       and set you desired port.
       JWT_SECRET = put your jsonwebtoken secret in here
       MONGODB_URI = your mogngdb url.
       
   then run:
        
        npm run dev
        
   This will run the server and the client concurently.
   
   If you wish to run the server or the client alone:
   
       npm run server | npm run client
       
   A complete guide for running either client or server or both you will find in the main package.json file inside scripts section.
   
   ## Packages

Node Packages:

   Name | Link
------------ | -------------
express | https://www.npmjs.com/package/express
bcryptjs | https://www.npmjs.com/package/bcryptjs
dotEnv | https://www.npmjs.com/package/dotenv
mongoose | https://www.npmjs.com/package/mongoose
jsonwebtoken | https://www.npmjs.com/package/jsonwebtoken
concurently | https://www.npmjs.com/package/concurrently
body-parser | https://www.npmjs.com/package/body-parser
lodash | https://www.npmjs.com/package/lodash


React Packages:

  Name | Link
------------ | -------------
react-bootstrap | https://www.npmjs.com/package/react-bootstrap
react-router-bootstrap: | https://www.npmjs.com/package/react-router-bootstrap
react-router-dom | https://www.npmjs.com/package/react-router-dom
redux | https://www.npmjs.com/package/redux
react-redux | https://www.npmjs.com/package/react-redux
redux-devtools-extension| https://www.npmjs.com/package/redux-devtools-extension
redux-thunk | https://www.npmjs.com/package/redux-thunk
react-paypal-button-v2 | https://www.npmjs.com/package/react-paypal-button-v2
axios | https://www.npmjs.com/package/axios

   
       

