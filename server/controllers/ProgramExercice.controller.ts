import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface ProgramExercice {
    id  :       number  ,
  reps  :     number,
  sets  :    number,
  exerciceId :number
  }
  



  export const addProgramEx = async (req: Request, res: Response) => {
    // const { reps, sets,exerciceId } = req.body;
  
    try {
   
  
       await prisma.programExercice.create({
        data:req.body
      });
  
      res.status(201).json("created");
    } catch (error: any) {
      res.status(400).json(error);
    }
  };

  
  export const getProgramEx = async (req:Request,res:Response)=>{
    const id=+req.params.id 
    try {
      let progex= await prisma.programExercice.findMany({where:{id:id},
      select:{
        sets:true,
        reps:true,
        Exercice:{
          select:{
            bodyPart:true,        
            equipment:true,       
            gifUrl:true,                     
            name  :true,          
            target:true
          }
        }
      }
      })
        res.status(200).send(progex)
    }catch (error: any) {
        res.status(400).json(error);
      }
  }

  export const getProgramExByEx = async (req:Request,res:Response)=>{
    const id=+req.params.idEx
     
    try {
        res.json (await prisma.programExercice.findMany({
          where:{exerciceId:id},
        }))
    }catch (error: any) {
        res.status(400).send(error);
      }
  }