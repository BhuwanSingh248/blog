import express from 'express';
import connectDB from './database';
import testRoutes from './routes/testRoutes';
import likeRoutes from './routes/likeRoutes';
import commentsRoutes from './routes/commentsRoutes';
import blogRoutes from './routes/blogRoutes';
import { json } from 'body-parser';
const listEndpoints = require('express-list-endpoints')

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(json());
app.use('/test', testRoutes);
app.use('/like', likeRoutes);
app.use('/comment', commentsRoutes);
app.use('/blog', blogRoutes);
const routesList = listEndpoints(app);
console.log("List of all routes");
console.log(routesList);

app.listen(PORT, () =>
{
    console.log(`server listening at port ${PORT}`)
});