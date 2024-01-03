import express, { Application, Request, Response } from "express";
import cors from 'cors';
import userRoute from './routes/auth.route' //impoting user route

const app: Application = express();
const PORT = 3000


app.use(express.json());
app.use(cors());

//user routes
app.use('/api/auth',userRoute)


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});