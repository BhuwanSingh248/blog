import { Express, Request, Response } from "express";
import swaggerJsdocs from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from "../../package.json";
// import log from './logger';


const options:swaggerJsdocs.Options = {
    definition:{
        openapi:"3.0.0",
        info : {
            title:'Blog Post API',
            version
            },
        components:{
            securitySchemas:{
                bearerAuth:{
                    type:'http',
                    scheme:'bearer',
                    bearerFormatt:"JWT",
                },
            },
        },
        security:[
            {
                bearerAuth:[],
            },
        ],
    },
    apis:["./src/routes/*.ts","./src/models/*.ts"]
};

const swaggerSpec = swaggerJsdocs(options);

function swaggerDocs(app:Express, port:number){
    // swageer page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    // Docs in JSON
    app.get('docs.json', (req:Request, res:Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}

export default swaggerDocs;