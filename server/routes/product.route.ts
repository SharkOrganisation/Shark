import express from 'express';
export const productRoute = express.Router();
import { getAllProduct ,deleteProduct,createProduct,updateProduct,getOneProduct} from '../controllers/product.controller';


productRoute.get('/get/products',getAllProduct)
productRoute.get('/getOne/products/:id',getOneProduct)
productRoute.delete('/delete/product/:id',deleteProduct)
productRoute.post('/create/product',createProduct)
productRoute.put('/uptade/product/:id',updateProduct)