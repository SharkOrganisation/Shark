import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const gymFollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idgym } = req.params;
  try {
    let follower = await prisma.gym.findUnique({
      where: { id: idgym },
      include: {
        followersCoach: {
          include: {
            Coach: true,
          },
        },
      },
    });
    const followers = follower?.followersCoach.map((follow) => follow.Coach?({fullname:follow.Coach.fullname,pfImage:follow.Coach.pfImage}):[]);
    res.status(200).send(followers);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const coachGymFollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idCoach } = req.params;
  try {
    let userFollower = await prisma.coach.findUnique({
      where: { id: idCoach },
      include: {
        followGym: {
          include: {
            Gym: true,
          },
        },
      },
    });

    const following = userFollower?.followGym.map((follow) => follow.Gym?({fullname:follow.Gym.fullname,pfImage:follow.Gym.pfImage}):[])||[];
    res.status(200).send(following);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const newFollow = async (req: Request, res: Response): Promise<void> => {
  const { gymId, idCoach } = req.params;

  try {
    let existfollow = await prisma.coachfollowingGym.findMany({
      where: { gymId: gymId, coachId: idCoach },
    });
    if (existfollow.length === 0) {
      let follow = await prisma.coachfollowingGym.create({
        data: {
          gymId: gymId,
          coachId: idCoach,
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
  const { idgym, idCoach } = req.params;
  try {
    let removed = await prisma.coachfollowingGym.deleteMany({
      where: { gymId: idgym, coachId: idCoach },
    });
    res.status(200).send("Follow removed");
  } catch (err) {
    res.status(400).send();
  }
};
