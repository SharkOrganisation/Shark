import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const getOneGymById = async (req:Request, res:Response) => {
    const gymId = +req.params.id
    try {
        const results = await prisma.gym.findUnique({where: {id: gymId}})
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}