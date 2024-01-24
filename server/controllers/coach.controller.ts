import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllCoachs = async (req: Request, res: Response) => {
  try {
    const coaches = await prisma.coach.findMany({
      select: {
        id: true,
        fullname: true,
        email: true,
        pfImage: true,
        datebirth: true,
        bio: true,
        speciality: true,
        perSession: true,
        Gym: {
          select: {
            id: true,
            fullname: true,
            Email: true,
            pfImage: true,
            type: true,
            bio: true,
            region: true,
            location: true,
          },
        },
      },
    });
    res.status(200).json(coaches);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getOneCoachById = async (req: Request, res: Response) => {
  const coachId = req.params.id;
  try {
    const results = await prisma.coach.findUnique({ where: { id: coachId } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCoach = async (req: Request, res: Response) => {
  const coachId = req.params.id;
  const { fullname, email, datebirth, bio, speciality, perSession, pfImage } =
    req.body;
  try {
    const coachInfo = await prisma.coach.update({
      where: { id: coachId },
      data: {
        fullname,
        pfImage,
        email,
        datebirth,
        bio,
        speciality,
        perSession,
      },
    });
    res.status(200).json(coachInfo);
  } catch (err) {
    console.error(err);
  }
};

