# MERN Starter

the aim with this starter is to have a fully configured starter project to begin creating a MERN Stack application.

it uses lazy and suspense to load components to Routes in a way that is more performant.

lazy  load image can be used to load images lazily and add effect to it while it loads (for performance and user experience)

## Instructions:

## /MERN_STARTER:

1. run rm -rf .git


## Install Dependencies:

### /client:

1. run npm install to install all node_modules
2. run npm install react-router-dom @tanstack/react-query axios @tanstack/react-query-devtools react-player 
3. npm i --save react-lazy-load-image-component
4. npm install --save-dev @types/react-lazy-load-image-component
 

### /server:

1. run npm i express mongodb nodemon mongoose dotenv cors

# /server/.env

change username and password for the corresponding ones to your cluster

### scripts

### /client:
- npm run dev

#### /server:
- npm run dev (nodemon server.js)
- npm start (node server.js)


## DOCS

- https://www.npmjs.com/package/react-lazy-load-image-component
- https://www.npmjs.com/package/react-player
- https://mongoosejs.com/docs/queries.html