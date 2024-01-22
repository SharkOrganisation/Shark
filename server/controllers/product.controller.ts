import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  catergory: string;
  images: string[];
}
const prisma = new PrismaClient();

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findMany();
    res.json(product);
    console.log("=============================product");
    
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const productid = +req.params.id;

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: productid },
    });

    res.json(deletedProduct);
  } catch (err) {
    console.error(err, "Error deleting product");
    res.json(err);
  }
};

export const createProduct = async (req: Request, res: Response) => {
 
  try {
    const prod = await prisma.product.create({
      data: req.body,
    });
    res.json(prod);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, catergory,description,images }: Product = req.body;
  const  id  = +req.params.id;
  try {
    const prod: Product = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    res.json(prod);
  } catch (err) {
    console.error(err, "Error updating product");
    res.json(err);
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  const productId = +req.params.id
  try {
    const Product: Product[] = await prisma.product.findMany({
      where: {
        id: productId,
      },
    });
    res.send(Product);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
