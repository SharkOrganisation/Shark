import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUserPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    let userPlan = await prisma.userPlan.findMany({
      where: { userId: userId },
      select: {
        id:true,
        status: true,
        planId:true,
        Plan: {
          select: {
            id:true,
            name: true,
            price: true,
            Coach: {
              select: {
                fullname: true,
                pfImage: true,
              },
            },
            Diet: {
              select: {
                name: true,
                meals: true,
              },
            },
            program: {
              select: {
                id:true,
                name: true,
                duration: true,
                programExercice: {
                  select: {
                    id:true,
                    reps: true,
                    sets: true,
                    Exercice: {
                      select: {
                        bodyPart: true,
                        equipment: true,
                        gifUrl: true,
                        name: true,
                        target: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    res.status(200).send(userPlan);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const giveUserPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, planId, status } = req.body;
  try {
    const makeUserPlan = await prisma.userPlan.create({
      data: {
        userId: userId,
        planId: planId,
        status: status,
      },
    });
    res.status(200).send("plan sended successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updatePlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, userId } = req.params;
  const { status } = req.body;
  try {
    const updateUserPlan = await prisma.userPlan.update({
      where: { id: +id, userId: userId },
      data: {
        status,
      },
    });
    res.status(200).send("plan updated successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};
