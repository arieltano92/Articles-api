const express = require('express');
const { PORT } = require('./config');
const router = require('./routes');
const { errorMiddleware } = require('./middlewares/error');
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { swaggerOptions } = require('./config/swaggerConfig')
const swaggerDocs = swaggerjsdoc(swaggerOptions)
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
