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