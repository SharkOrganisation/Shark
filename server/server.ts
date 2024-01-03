import express, { Application, Request, Response } from "express";
import cors from 'cors';
import {memberShipRoute} from "./routes/memberShip.router"
import {productRoute} from "./routes/product.route"
import { programRoute } from "./routes/program.route";
import {dietRoute} from "./routes/diet.route"
import {commentRoute} from "./routes/comments.route"
import {basketRoute} from "./routes/basket.route"
import {planRoute} from "./routes/plan.route"
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



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});