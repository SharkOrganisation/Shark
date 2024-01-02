import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface Post {
    id: number;
    content: string;
    likes: number;
    image: string[];
    gymId:number;
  }
  
  export const addpost = async (req: Request, res: Response) => {
    const { content, image,gymId,coachId } = req.body;
  
    try {
   
  
       await prisma.post.create({
        data: {...req.body}
      });
  
      res.status(201).json("created");
    } catch (error: any) {
      res.status(400).json(error);
    }
  };

  export const getGympost = async (req: Request, res: Response) => {
    const id = +req.params.gymId;
    try {
      const response = await prisma.post.findMany({where:{gymId:id}});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  export const getCoachpost = async (req: Request, res: Response) => {
    const id = +req.params.coachId;
    try {
      const response = await prisma.post.findMany({where:{coachId:id}});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  }






  // export const getAllPosts = async (req: Request, res: Response) => {
  //   const { artistId } = req.params;
  //   try {
  //     const allPosts = await prisma.post.findMany({
  //       where:{
  //         artistId: Number(artistId)
  //       }
  //     });
  //     res.status(200).json(allPosts);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).send("Internal Server Error");
  //   }
  // };
  

//   export const updatePostPic = async (req:Request, res: Response) =>{
//     const {picture} = req.body;
//     const {artistId}=req.params
//     try {
//       const updatedPostPic = await prisma.post.update({
//         where:{
//           id: Number(artistId)
//         },
//         data:{
//           picture:picture
//         }
//       })
//       res.status(201).json(updatedPostPic)
//     } catch (error:any) {
//       console.log(error);
//       res.status(404).send(error);
//     }
//     }