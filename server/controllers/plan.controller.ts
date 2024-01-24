import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createPlan = async (req: Request, res: Response) => {
  const { name, price, programId, coachId, dietId } = req.body;
  try {
    await prisma.plan.create({
      data: {
        name: name,
        price: price,
        programId: programId,
        coachId: coachId,
        dietId: dietId,
      },
    });
    res.json("success");
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const getPlan = async (req: Request, res: Response) => {
  const planId = +req.params.id;
  try {
    const plan = await prisma.plan.findMany({
      where: {
        id: planId,
      },
      select: {
        name: true,
        price: true,
        program: {
          select: {
            name: true,
            duration: true,
            description: true,
          },
        },
        Coach: {
          select: {
            fullname: true,
          },
        },
        Diet: {
          select: {
            name: true,
            meals: true,
          },
        },
      },
    });
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const getplanBycoach = async (req: Request, res: Response) => {
  // code here
  const exercises = await prisma.plan.findMany({
    where: { coachId: req.params.coachId },
    select: {
      id: true,
      name: true,
      price: true,
      Diet: {
        select: {
          name: true,
          meals: true,
        },
      },
      userPlan: {
        select: {
          User: {
            select: {
              fullname: true,
              pfImage: true,
            },
          },
        },
      },
      program: {
        select: {
          name: true,
          description: true,
          duration: true,
          id: true,
          programExercice: {
            select: {
              id: true,
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
      },
    },
  });
  res.json(exercises);
};

export const getAllPlans = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allPlans=await prisma.plan.findMany({select:{
      id:true,
      name:true,
      price:true,
      Coach:{
        select:{
          id:true,
          fullname:true
        }
      }
    }})
    res.status(200).json(allPlans)
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
};
