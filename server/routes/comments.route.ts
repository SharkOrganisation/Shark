import express from 'express';
export const commentRoute = express.Router();
import { getAllCommnts,getOnecommnts,deleteComments,createComments } from '../controllers/comments.controller';

commentRoute.get('/get/:userId/:postId',getAllCommnts)
commentRoute.get('/getOne/:id',getOnecommnts)
commentRoute.post('/post',createComments)
commentRoute.delete('/delete/:id',deleteComments)

