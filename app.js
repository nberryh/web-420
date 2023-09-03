/**
====================================================
; Title:  berryhill-app.js
; Author: Nolan Berryhill
; Date:   09/03/23
; Description: API application
;===================================================
*/

// Require variables
const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');
const composerAPI = require('./routes/berryhill-composer-routes');
const Composer = require('./models/berryhill-composer');

// App configuration and port 
const app = express();
const port = process.env.PORT || 3000;

// Middleware for API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to MongoDB
const conn = 'mongodb+srv://web420_user:S3cret@cluster0.wmphxtw.mongodb.net/';

mongoose
    .connect(conn)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Not Connected to MongoDB Error!", err);
    });

// Swagger docs 
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./docs/berryhill-composers.yaml'],
};

// Making swaggerJsdoc
const openapiSpecification = swaggerJsdoc(options);

// Setup swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/api', composerAPI);

// Server location
http.createServer(app).listen(port, () => {
    console.log(`Application started and listening on port ${port}`);
});