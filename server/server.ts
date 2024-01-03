import express, { Application, Request, Response } from "express";
import cors from 'cors';

const app: Application = express();
const PORT = 3000


app.use(express.json());
app.use(cors());


//post
import routePost from "./routes/posts.route"
app.use('/api//posts',routePost)


//review
import routeReview from "./routes/review.route"
app.use('/api//review',routeReview)

//programExercice
import routeprgEx from "./routes/ProgramExercice.route"
app.use('/api//programEx',routeprgEx)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
