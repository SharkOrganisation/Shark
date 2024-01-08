import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response) => {
  const role = req.params.role;
  const { id, fullname, email,age, datebirth, location,type, speciality, perSession,bmi } =
    req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
  try {
    if (role === "user") {
      const userExisted = await prisma.user.count({
        where: { email: email },
      });
      if (userExisted !== 0) {
        res.status(409).send("user already exists");
      } else if (userExisted === 0) {
        const newUser = await prisma.user.create({
          data: {
            id,
            fullname,
            email,
            datebirth,
            age,
            bmi,
            pfImage: "",
          },
        });
        res.status(200).json(newUser);
      }
    } else if (role === "Gym") {
      const gymOwnerExisted = await prisma.gym.count({
        where: { Email: email },
      });
      if (gymOwnerExisted !== 0) {
        res.status(409).send("Gym owner already exists");
      } else if (gymOwnerExisted === 0) {
        console.log('====================================');
        console.log('from gym table');
        console.log('====================================');
        const newGym = await prisma.gym.create({
          data: {
            id,
            fullname,
            type,
            Email: email,
            pfImage: "",
            location,
          },
        });
        res.status(200).json(newGym);
      }
    } else if (role === "coach") {
      const coachExisted = await prisma.coach.count({
        where: { email: email },
      });
      if (coachExisted !== 0) {
        res.status(409).send("Coach already exists");
      } else if (coachExisted === 0) {
        const newCoach = await prisma.coach.create({
          data: {
            id,
            fullname,
            email,
            datebirth,
            speciality,
            perSession,
            pfImage: "",
            bio: "",
          },
        });
        res.status(200).json(newCoach);
      }
    }
  } catch (err) {
    res.status(500).json({ Error: err });
  }




};
