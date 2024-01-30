import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();




export const getoneMemberbyuserId = async (req: Request, res: Response) => {
  const userId = req.params.id;
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
            location:true
          },
        },
        user:{
          select:{
            fullname:true,
            pfImage:true
          }
        }
      },
    });
    res.json(member);
  } catch (err) {
    console.error(err);
    res.status(404).json(err);
  }
};
export const getoneMemberbyGymId = async (req: Request, res: Response) => {
  const gymId = req.params.id;
  try {
    const member = await prisma.membership.findMany({
      where: {
        gymId,
      },
      select: {
        type:true,
        expiredAt:true,
        
        user: {
          select: {
            fullname: true,
            pfImage: true,
          },
        },
        Gym:{
          select:{
            fullname:true,
            pfImage:true,
            location:true,
          }
        }
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

const calculateExpirationDate = (type: string): Date => {
  const currentDate = new Date();

  if (type === '1 Month') {
    currentDate.setMonth(currentDate.getMonth() + 1);
  } else if (type === '6 Months') {
    currentDate.setMonth(currentDate.getMonth() + 6);
  } else if (type === '1 Year') {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  } else {
    throw new Error('Invalid membership type.');
  }

  return currentDate;
};

export const createShip = async (req: Request, res: Response) => {
  const { type, price, userId, gymId } = req.body;

  try {
    const expirationDate = calculateExpirationDate(type);

    const ship = await prisma.membership.create({
      data: {
        type,
        price,
        expiredAt: expirationDate,
        userId,
        gymId,
      },
    });

    res.json(ship);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};
