import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllExercises = async (req: Request, res: Response) => {
  try {
    const exe = await prisma.exercice.findMany();
    res.json(exe);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const getExerciceByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const results = await prisma.exercice.findMany({
      where: { name: name },
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
