import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response) => {
  const role = req.params.role;
  const { fullname, email, datebirth,location,speciality,perSession }= req.body;
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
            fullname,
            email,
            datebirth,
            pfImage: ""
          },
        });
        res.status(200).json(newUser);
      }
    }else if(role === "Gym"){
        const gymOwnerExisted = await prisma.gym.count({
            where: {email: email}
        })
        if(gymOwnerExisted !== 0){
            res.status(409).send("Gym owner already exists")
        }else if(gymOwnerExisted === 0){
            const newGym = await prisma.gym.create({
                data:{
                   fullname,
                   email,
                   datebirth,
                   pfImage:"" ,
                   location
                }
            })
            res.status(200).json(newGym)

        }

    }else if (role === 'coach'){
        const coachExisted = await prisma.coach.count({
            where:{email:email}
        })
        if(coachExisted !== 0){
            res.status(409).send('Coach already exists')
        }else if (coachExisted === 0){
            const newCoach = await prisma.coach.create({
                data:{
                    fullname,
                    email,
                    datebirth,
                    speciality,
                    perSession,
                    pfImage:"",
                    bio:""

                }
            })
            res.status(200).json(newCoach)
        }
    }
  } catch (err) {
    res.status(500).json({ Error: err })
  }
};
