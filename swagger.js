require('dotenv').config(); //load envVar from my .env file
const swaggerAutoGen = require('swagger-autogen')();

const swaggerDefinition = {
    info: {
        title: 'Book API',
        version: '1.0.0',
        description: 'Manage books',
    },
    host: process.env.HOST, // Change this to your actual host
    schemes: ['http'], // Use 'https' if applicable
};

const outputFile = `./swagger-output-${process.env.LANE}.json`;
const routes = ['./routes/index.js'];

swaggerAutoGen(outputFile, routes, swaggerDefinition);