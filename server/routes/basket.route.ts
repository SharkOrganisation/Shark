import express from 'express';
export const basketRoute = express.Router();
import { getAllBasket ,getOneBasketByCoachId,getOneBasketByGymId,getOneBasketByUserId,deleteBasket,updateBasket} from '../controllers/basket.controller';

basketRoute.get('/get',getAllBasket)
basketRoute.get('/getOneByCoach/:id',getOneBasketByCoachId)
basketRoute.get('/getOneByGym/:id',getOneBasketByGymId)
basketRoute.get('/getOneByUser/:id',getOneBasketByUserId)
basketRoute.delete('/delete/:id',deleteBasket)
basketRoute.put('/update/:id',updateBasket)
