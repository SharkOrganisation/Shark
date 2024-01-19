import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const coachFollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idCoach } = req.params;
  try {
    let follower = await prisma.coach.findUnique({
      where: { id: idCoach },
      include: {
        followers: {
          include: {
            User: true,
          },
        },
      },
    });
    const followers = follower?.followers.map((follow) => follow.User?({id:follow.User.id,fullname:follow.User?.fullname, pfImage:follow.User.pfImage}) : []) || [];
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
      include: {
        followedCoach: {
          include: {
            Coach: true,
          },
        },
      },
    });
    const following =
      userFollower?.followedCoach.map((follow) => follow.Coach? ({id:follow.Coach.id,fullname:follow.Coach.fullname ,pfImage:follow.Coach.pfImage }):[])
    res.status(200).send(following);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const newFollow = async (req: Request, res: Response): Promise<void> => {
  const { idCoach, userId } = req.params;

  try {
    let existfollow = await prisma.followingCoach.findMany({
      where: { coachId: idCoach, userId: userId },
    });
    if (existfollow.length === 0) {
      let follow = await prisma.followingCoach.create({
        data: {
          coachId: idCoach,
          userId: userId,
        },
      });
      res.status(200).send("follow added successfully");
    } else {
      res.status(409).send("you are allready a follower");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

export const removeFollow = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idCoach, iduser } = req.params;
  try {
    let removed = await prisma.followingCoach.deleteMany({
      where: { coachId: idCoach, userId: iduser },
    });
    res.status(200).send("Follow removed");
  } catch (err) {
    res.status(400).send();
  }
};
