import express from 'express';
import connectDB from './database';
import testRoutes from './routes/testRoutes';
import likeRoutes from './routes/likeRoutes';
import commentsRoutes from './routes/commentsRoutes';



const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use('/test', testRoutes);
app.use('/like', likeRoutes);
app.use('/comment', commentsRoutes);


app.listen(PORT, () =>
{
    console.log(`server listening at port ${PORT}`)
});