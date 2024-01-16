import express from 'express';
export const basketRoute = express.Router();
import { getOneBasketByCoachId,getOneBasketByGymId,getOneBasketByUserId,deleteBasket,updateBasket,addToBasket} from '../controllers/basket.controller';


basketRoute.get('/getOneByCoach/:id',getOneBasketByCoachId)
basketRoute.get('/getOneByGym/:id',getOneBasketByGymId)
basketRoute.get('/getOneByUser/:id',getOneBasketByUserId)
basketRoute.delete('/delete/:role/:id/:idConnected', deleteBasket);
basketRoute.put('/update/:id',updateBasket)
basketRoute.post('/add',addToBasket)