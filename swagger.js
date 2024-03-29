require('dotenv').config(); //load envVar from my .env file
const swaggerAutoGen = require('swagger-autogen')();

const swaggerDefinition = (host, lane) => ({
    info: {
        title: 'Book API',
        version: '1.0.0',
        description: 'Manage books',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
    // adding the member API definition
    memberAPI: {
        title: 'Member API',
        version: '1.0.0',
        description: 'Manage library members',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
});
const routes = ['./routes/index.js'];

swaggerAutoGen(`./swagger-output-${process.env.LANE_LOCAL}.json`, routes, swaggerDefinition(process.env.HOST_LOCAL, process.env.LANE_LOCAL));
swaggerAutoGen(`./swagger-output-${process.env.LANE_PROD}.json`, routes, swaggerDefinition(process.env.HOST_PROD, process.env.LANE_PROD));
