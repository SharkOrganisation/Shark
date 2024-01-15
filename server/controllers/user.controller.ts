import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const getOneUserById = async (req: Request, res: Response)=>{

    const userId = req.params.id;

    try {
        console.log(userId)
        const results = await  prisma.user.findUnique({where: {id: userId}})
        
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}



export const updateInfoUser=async (req: Request, res: Response): Promise<void> =>{
    const {id}=req.params
    const {fullname,pfImage,email,age,bmi}=req.body
try{
    const userUpdated=await prisma.user.update({where:{id},data:{
        fullname,
        pfImage,
        age,
        bmi
    }})
    res.status(200).send(userUpdated)
}catch(error){
    res.status(400).send(error)
}
}