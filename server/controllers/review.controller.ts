import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


interface Review {
    id     : number  ;
    content : String;
    stars   : number;
}


 
export const addReview = async (req: Request, res: Response) => {
    try {
       await prisma.review.create({
        data:req.body
      });
  
      res.status(201).json("created");
    } catch (error: any) {
      res.status(400).json(error);
    }
  };

  export const getGymReview=async(req:Request, res:Response)=>{
    const id=req.params.id
    try {
        const response = await prisma.review.findMany({where:{gymId:id}});
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error });
      }
  } 

