import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createPlan = async (req: Request, res: Response) => {
  try {
    const plan = await prisma.plan.create({
      data: req.body,
    });
    res.json(plan);
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
        status: true,
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
  const coachId = +req.params.id;
  try {
    const plan = await prisma.plan.findMany({
      where: {
        coachId,
      },
      select: {
        name: true,
        price: true,
        status: true,
      }

    });
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
