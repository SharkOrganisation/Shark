import express from 'express';
export const basketRoute = express.Router();
import { getAllBasket ,getOneBasketByCoachId,getOneBasketByGymId,getOneBasketByUserId,deleteBasket,updateBasket,addToBasket} from '../controllers/basket.controller';

basketRoute.get('/get',getAllBasket)
basketRoute.get('/getOneByCoach/:id',getOneBasketByCoachId)
basketRoute.get('/getOneByGym/:id',getOneBasketByGymId)
basketRoute.get('/getOneByUser/:id',getOneBasketByUserId)
basketRoute.delete('/delete/:role/:id/:userId?/:coachId?/:gymId?', deleteBasket);
basketRoute.put('/update/:id',updateBasket)
basketRoute.post('/add',addToBasket)