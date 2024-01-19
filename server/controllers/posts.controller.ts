import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface Post {
  id: number;
  content: string;
  likes: number;
  image: string[];
  gymId: number;
}

export const addpost = async (req: Request, res: Response) => {
  const { content, image, gymId, coachId } = req.body;

  try {
    await prisma.post.create({
      data: {
        content,
        image,
        likes: 0,
        gymId,
        coachId,
      },
    });

    res.status(201).json(" Post created");
  } catch (error: any) {
    res.status(400).json(error);
  }
};

export const getGympost = async (req: Request, res: Response) => {
  const id = req.params.gymId;
  try {
    const response = await prisma.post.findMany({
      where: { gymId: id },
      select: {
        id: true,
        content: true,
        likes: true,
        image: true,
        comments: {
          select: {
            content: true,
            likes: true,
            User: {
              select: {
                fullname: true,
                pfImage: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getCoachpost = async (req: Request, res: Response) => {
  const id = req.params.coachId;
  try {
    const response = await prisma.post.findMany({
      where: { coachId: id },
      select: {
        id : true,
        content: true,
        likes: true,
        image: true,
        comments: {
          select: {
            content: true,
            likes: true,
            User: {
              select: {
                fullname: true,
                pfImage: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletepost = async (req: Request, res: Response) => {
  try {
    const query = await prisma.post.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send(query);
  } catch (error) {
    res.send(error);
  }
};
