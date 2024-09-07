exports.swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'News API',
            description: 'News API articles',
            contact: {
                name: 'Ariel Calodolce'
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: 'Localhost server'
            }
        ],
    },
    apis: ['./src/routes/*.js']
}