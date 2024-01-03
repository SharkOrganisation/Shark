import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Diet {
  name: string;
  meals: string;
}

const prisma = new PrismaClient();

export const getAllDiet = async (req: Request, res: Response) => {
  try {
    const Diet = await prisma.diet.findMany();
    res.json(Diet);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const getOneDiet = async (req: Request, res: Response) => {
  const dietId = +req.params.id;
  try {
    const diet = await prisma.diet.findUnique({
      where: {
        id: dietId,
      },
    });
    res.json(diet);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
export const deletedDiet = async (req: Request, res: Response) => {
    const dietId = +req.params.id;

    try {
      const deletedDiet = await prisma.diet.delete({
        where: { id: dietId },
      });
      res.json(deletedDiet);
    } catch (err) {
      console.error(err, "Error deleting diet");
      res.json(err);
    }
  };

  export const creatediet = async (req: Request, res: Response) => {
    try {
      const diet = await prisma.diet.create({
        data: req.body,
      });
      res.json(diet);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  };