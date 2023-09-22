import express from 'express';
import connectDB from './database';
import testRoutes from './routes/testRoutes';
import likeRoutes from './routes/likeRoutes';
import commentsRoutes from './routes/commentsRoutes';
import blogRoutes from './routes/blogRoutes';
import authRouter from './routes/authRouter'
import { json } from 'body-parser';
import authenticationToken from './middleware/authMiddleware';
import swaggerDocs from './utils/swagger';
const listEndpoints = require('express-list-endpoints')

const app = express();
const PORT = Number(process.env.PORT) || 3000;

connectDB();
app.use(json());
app.use('/test', testRoutes);
app.use('/like', authenticationToken, likeRoutes);
app.use('/comment', authenticationToken, commentsRoutes);
app.use('/blog', authenticationToken, blogRoutes);
app.use('', authRouter);

const routesList = listEndpoints(app);
console.log("List of all routes");
console.log(routesList);

app.listen(PORT, () =>
{
    console.log(`server listening at port ${PORT}`);
    swaggerDocs(app, PORT)
});