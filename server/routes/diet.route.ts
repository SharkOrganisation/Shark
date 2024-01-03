import express from 'express';
export const dietRoute = express.Router();
import { getAllDiet ,getOneDiet,deletedDiet,creatediet} from '../controllers/diet.controller';

dietRoute.get('/get',getAllDiet)
dietRoute.get('/getOne/:id',getOneDiet)
dietRoute.delete('/delete/:id',deletedDiet)
dietRoute.post('/post',creatediet)



