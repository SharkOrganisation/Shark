import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Comment {
  content: string;
  likes: number;
}

const prisma = new PrismaClient();

export const getAllCommnts = async (req: Request, res: Response) => {
  // const postId = +req.params;
  const { userId,postId } = req.params;
  try {
    const commnt = await prisma.comment.findMany({
      where: { userId: userId, postId: +postId },
      select: {
        content: true,
        likes: true,
        User: {
          select: {
            pfImage: true,
            fullname: true,
          },
        },
      },
    });
    res.json(commnt);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
export const deleteComments = async (req: Request, res: Response) => {
  const commntsid = +req.params.id;

  try {
    const deletedcomments = await prisma.comment.delete({
      where: { id: commntsid },
    });

    res.json(deletedcomments);
  } catch (err) {
    console.error(err, "Error deleting comments");
    res.json(err);
  }
};

export const createComments = async (req: Request, res: Response) => {
  const { content, likes } = req.body;
  try {
    const prod = await prisma.comment.create({
      data: {
        content,
        likes: 0,
      },
    });
    res.json(prod);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const getOnecommnts = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const commnts = await prisma.comment.findMany({
      where: {
        userId,
      },
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
    });
    res.send(commnts);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};
