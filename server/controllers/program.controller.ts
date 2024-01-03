import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Program {
  name: string;
  duration: string;
  description: string;
}

const prisma = new PrismaClient();

export const createprogram = async (req: Request, res: Response) => {
  try {
    const prom = await prisma.program.create({
      data: req.body,
    });
    res.json(prom);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const deletedProgram = async (req: Request, res: Response) => {
  const prgramId = +req.params.id;

  try {
    const deletedProgram = await prisma.program.delete({
      where: { id: prgramId },
    });
    res.json(deletedProgram);
  } catch (err) {
    console.error(err, "Error deleting program");
    res.json(err);
  }
};

export const getAllProgram = async (req: Request, res: Response) => {
  try {
    const program = await prisma.program.findMany();
    res.json(program);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
export const getOneProgram = async (req: Request, res: Response) => {
  const programId = +req.params.id;

  try {
    const program = await prisma.program.findUnique({
      where: {
        id: programId,
      },
      select: {
        
        name:true,
        duration:true,
        description:true,
        programExercice: {
          select: {
            reps: true,
            sets: true,
            Exercice: {
              select: {
                name: true,
                bodyPart: true,
                equipment: true,
                target: true,
                gifUrl: true,
              },
            },
          },
        },
      },
    });

    res.json(program);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
