import { PrismaClient } from "@prisma/client";
import { all } from "axios";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getOneGymById = async (req: Request, res: Response) => {
  const gymId = req.params.id;
  try {
    const results = await prisma.gym.findUnique({ where: { id: gymId } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateGym = async (req: Request, res: Response) => {
  const gymId = req.params.id;
  const { fullname, type, location, bio, pfImage } = req.body;
  try {
    const updateUser = await prisma.gym.update({
      where: { id: gymId },
      data: {
        fullname,
        type,
        location,
        bio,
        pfImage,
      },
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getAllGyms = async (
  req: Request,
  res: Response
): Promise<void> => {
    try {
    let gyms;
    const region = req.query.region as string

    if (region) {
      gyms = await prisma.gym.findMany({ where: { region} });
    } else {
      gyms = await prisma.gym.findMany({
        select: {
          id: true,
          fullname: true,
          Email: true,
          pfImage: true,
          type: true,
          bio: true,
          region: true,
          location: true,
          verified: true,
        },
      });
    }

    res.json(gyms);
  } catch (error) {
    console.error('Error fetching gyms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
};


export const getGymsByRegion = async (req: Request, res: Response):Promise<void>=>{
  const {region} = req.params
  try {
    const gyms = await prisma.gym.findMany({
      where:{
        region
      }
    })
    res.status(200).json(gyms)
  } catch (error) {
    res.status(500).send(error)
  }
}