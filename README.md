# MERN Starter

the aim with this starter is to have a fully configured starter project to begin creating a MERN Stack application.

it uses lazy and suspense to load components to Routes in a way that is more performant.

lazy  load image can be used to load images lazily and add effect to it while it loads (for performance and user experience)

## Instructions:

## Install Dependencies:

### /client:

1. run npm install to install all node_modules
2. run npm install react-router-dom
3. run npm install @tanstack/react-query
4. run npm install axios
5. npm i @tanstack/react-query-devtools
6. npm i --save react-lazy-load-image-component (https://www.npmjs.com/package/react-lazy-load-image-component)
7. npm install react-player (https://www.npmjs.com/package/react-player)

### /server:

1. run npm i express  
2. run npm i mongodb
3. run npm i nodemon
4. run npm i mongoose
5. run npm i dotenv
6. run npm i cors


# /server/.env

change username and password for the corresponding ones to your cluster

### scripts

### /client:
-npm run dev

#### /server:
- npm run dev (nodemon server.js)
- npm start (node server.js)
