import express, { Application, Request, Response } from "express";
import cors from 'cors';
import {memberShipRoute} from "./routes/memberShip.router"
import {productRoute} from "./routes/product.route"
import { programRoute } from "./routes/program.route";
import {dietRoute} from "./routes/diet.route"
import {commentRoute} from "./routes/comments.route"
import {basketRoute} from "./routes/basket.route"
import {planRoute} from "./routes/plan.route"
import authRoute from './routes/auth.route' //impoting auth route
import exerciceRoute from './routes/exercice.route' //impoting exercice route
import userRoute from './routes/user.route' //impoting user route
import gymRoute from './routes/gym.route' //impoting gymnet route
import coachRoute from './routes/coach.route' //impoting coach route


const app: Application = express();
const PORT = 3000


app.use(express.json());
app.use(cors());

app.use("/api/memberShip",memberShipRoute)
app.use("/api/product",productRoute)
app.use("/api/program",programRoute)
app.use("/api/diet",dietRoute)
app.use("/api/comments",commentRoute)
app.use("/api/basket",basketRoute)
app.use("/api/plan",planRoute)

//post
import routePost from "./routes/posts.route"
app.use('/api//posts',routePost)


//review
import routeReview from "./routes/review.route"
app.use('/api//review',routeReview)

//programExercice
import routeprgEx from "./routes/ProgramExercice.route"
app.use('/api//programEx',routeprgEx)

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
