import express, { Application, Request, Response } from "express";
import cors from 'cors';
import authRoute from './routes/auth.route' //impoting auth route
import exerciceRoute from './routes/exercice.route' //impoting exercice route
import userRoute from './routes/user.route' //impoting user route
import gymRoute from './routes/gym.route' //impoting gymnet route
import coachRoute from './routes/coach.route' //impoting coach route


const app: Application = express();
const PORT = 3000


app.use(express.json());
app.use(cors());


//auth routes
app.use('/api/auth',authRoute)


//exercice route
app.use('/api/exercice',exerciceRoute)

// user route 
app.use('/api/user',userRoute)

//gym route
app.use('/api/gym',gymRoute)

//coach route
app.use('/api/coach',coachRoute)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});