import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition: {
        openapi: '3.2.0',
        info: {
            title: 'E-commerce API',
            version: '1.0.0',
            description: 'Web api services for muji-front-end',
        },
        servers: [
            {
                url: 'http://localhost:8081/api',
            },
        ],

    },
    // Các file chứa chú thích API
    apis: ['./src/swagger/*.ts', './server.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

console.log("show path", swaggerSpec);

export default { swaggerSpec, swaggerUI }