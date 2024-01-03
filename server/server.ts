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


import followingGym from "./routes/followingGym_route";
import followingCoach from "./routes/followingCoach_route";
import coachFollowGym from "./routes/CoachFollowGym";
import savedPost from "./routes/savedPost_route";
const app: Application = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

//Gym Followers:
app.use("/api/followingGym", followingGym);

// Membership Route:
app.use("/api/memberShip",memberShipRoute)

//Products Route:
app.use("/api/product",productRoute)

// Program Route:
app.use("/api/program",programRoute)

// Diet Route:
app.use("/api/diet",dietRoute)

// comments Route:
app.use("/api/comments",commentRoute)

// Basket Route:
app.use("/api/basket",basketRoute)

// Plan Route:
app.use("/api/plan",planRoute)

// Coach Followers:
app.use("/api/followingCoach", followingCoach);

// Gym Coach Followers:
app.use("/api/coachFollowGym", coachFollowGym);

// Saved Post :
app.use("/api/savedPost", savedPost);

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
