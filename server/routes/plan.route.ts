import express from 'express';
export const planRoute = express.Router();

import {createPlan,getPlan,getplanBycoach,getAllPlans} from "../controllers/plan.controller"


planRoute.post('/post',createPlan)
planRoute.get("/getAllPlans",getAllPlans)
planRoute.get('/get/:id',getPlan)
planRoute.get('/getByCoach/:id',getplanBycoach)
