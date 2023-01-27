import  express  from "express";
import morgan from 'morgan'
import pkg from '../package.json'

import { createRoles } from "./libs/initialSetup";

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/users.routes'

const swaggerUI = require("swagger-ui-express");
const path = require("path");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MongoDB API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
        apis: [`${path.join(__dirname, "./routes/*.js")}`], 
}

const app = express()
createRoles();


app.set('pkg', pkg);

app.use(morgan('dev'));

app.use(express.json());

app.get('/',(req, res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
export default app;     
