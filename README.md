# Liftables

[Liftables live](liftables.herokuapp.com)

Liftables is a full-stack web application inspired by Instructables with a focus on fitness and weight lifting. It utilizes Ruby on Rails on the backend, a PostrgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features

* Secure user authentication
* Writing and editing instructive articles
* Commenting on articles
* Searching articles by keyword
* Picture uploading for articles and subordinate steps
* Image hosting on Cloudinary

## Project Design

Liftables was designed and built in a two week period. A [proposal](./docs/README.md) was drafted to help provide a timeline during the development process.

## Technology

### Backend

#### Heroku

A production server was user.

#### Database

PostrgreSQL RDBMS is necessary for Heroku.

#### Dependencies

* Cloudinary for image-hosting
* Dropzone for drag-and-drop image uploading
* BCrypt for password-salting and hashing for a secure authentication system.

### Frontend

Liftables uses React with Redux to manage asynchronous calls to the backend database.

#### NPM

Node Package Manager (NPM) is used to install all frontend dependencies.

#### Webpack

Webpack is used to conveniently bundle all frontend components into a bundle file located in /app/assets/javascripts, which is then included in the main application.js file.

#### React/Redux

All React components, Redux actions, API utiities and store are located in the frontend directory.

#### jQuery

jQuery is used to make AJAX requests to the rails server.

### Future Features

* Video embedding
* User profiles
* Article Categories
* Featured article channels
