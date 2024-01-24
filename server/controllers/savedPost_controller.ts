import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPost = async (req: Request, res: Response): Promise<void> => {
  const { iduser } = req.params;
  try {
    let saved = await prisma.user.findUnique({
      where: { id: iduser },
      include: {
        savedPosts: {
          include: {
            Post: true,
          },
        },
      },
    });
    const post = saved?.savedPosts.map((save) => save.Post) || [];
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addSave = async (req: Request, res: Response): Promise<void> => {
  const { userId, postId } = req.params;
  try {
    let getSave=await prisma.savedPost.findMany({where:{userId:userId,postId:+postId}})
    if(getSave.length===0){
      let newSave = await prisma.savedPost.create({
        data: { userId, postId: +postId },
      });
      res.status(200).send("Post Saved successfully");
    }else{
      res.status(201).send("this post exist")
    }
  } catch (err) {
    res.status(400).send(err);
  }
};


export const removeSaved = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { userId, postId } = req.params;
    try {
      let removed = await prisma.savedPost.deleteMany({
        where: { userId: userId, postId: +postId },
      });
      res.status(200).send("Post removed from saved");
    } catch (err) {
      res.status(400).send();
    }
  };