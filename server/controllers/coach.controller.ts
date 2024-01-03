import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const getOneCoachById = async (req:Request, res:Response)=>{
    const coachId = req.params.id
    try {
        const results = await  prisma.coach.findUnique({where:{id: coachId}})
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}