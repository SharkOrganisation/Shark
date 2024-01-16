import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getFollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idgym } = req.params;
  try {
    let follower = await prisma.gym.findUnique({
      where: { id: idgym },
      include:{
        followers:{
          include:{
            User:true
          }
        }
      }
    });
    const followers = follower?.followers.map((fav) => fav.User?{fullname:fav.User.fullname,pfImage:fav.User.pfImage}:[]) || []
    res.status(200).send(followers);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const userFollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { iduser } = req.params;
  try {
    let userFollower = await prisma.user.findUnique({
      where: { id: iduser },
      include:{
        followedGym:{
          include:{
            Gym:true
          }
        }
      }
    });
    const followers = userFollower?.followedGym.map((follow) => follow.Gym?{id:follow.Gym.id,fullname:follow.Gym.fullname, pfImage:follow.Gym.pfImage }:[] ) || []

    res.status(200).send(followers);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const newFollow = async (req: Request, res: Response): Promise<void> => {
  const { gymId, userId } = req.params;

  try {
    let existfollow = await prisma.followingGym.findMany({where:{gymId:gymId,userId:userId}})
    console.log(existfollow);
    if(existfollow.length===0){
      let follow = await prisma.followingGym.create({
        data: {
          gymId: gymId,
          userId: userId,
        },
      });
      res.status(200).send(follow);
    }
    else{
      res.status(409).send("you are allready a follower")
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

export const removeFollow = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idgym, iduser } = req.params;
  try {
    let removed = await prisma.followingGym.deleteMany({
      where: { gymId: idgym, userId: iduser },
    });
    res.status(200).send("Follow removed");
  } catch (err) {
    res.status(400).send();
  }
};
