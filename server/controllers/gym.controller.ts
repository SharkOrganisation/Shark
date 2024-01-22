import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const getOneGymById = async (req:Request, res:Response) => {
    const gymId = req.params.id
    try {
        const results = await prisma.gym.findUnique({where: {id: gymId}})
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateGym = async (req:Request, res:Response) => {
    const gymId = req.params.id
    const {fullname,type,location,bio,pfImage} = req.body
    try {
        const updateUser = await prisma.gym.update({
            where: {id: gymId},
            data:{
                fullname,
                type,
                location,
                bio,
                pfImage
            }
        })
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

