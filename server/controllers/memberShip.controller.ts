import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();




export const getoneMemberbyuserId = async (req: Request, res: Response) => {
  const userId = +req.params.id;
  try {
    const member = await prisma.membership.findMany({
      where: {
        userId,
      },
      include: {
        Gym: {
          select: {
            fullname: true,
            pfImage: true,
          },
        },
      },
    });
    res.json(member);
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
};
export const getoneMemberbyGymId = async (req: Request, res: Response) => {
  const gymId = +req.params.id;
  try {
    const member = await prisma.membership.findMany({
      where: {
        gymId,
      },
      include: {
        user: {
          select: {
            fullname: true,
            pfImage: true,
          },
        },
      },
    });
    res.json(member);
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
};

export const getAllMembersShip = async (req: Request, res: Response) => {
  try {
    const members = await prisma.membership.findMany();
    res.json(members);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const createShip = async (req: Request, res: Response) => {
  try {
    const ship = await prisma.membership.create({
      data: req.body,
    });
    res.json(ship);
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
};
