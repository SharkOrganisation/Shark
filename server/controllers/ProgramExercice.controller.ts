import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface ProgramExercice {
  id: number;
  reps: number;
  sets: number;
  exerciceId: number;
}

export const addProgramEx = async (req: Request, res: Response) => {
  // const { reps, sets,exerciceId } = req.body;
  try {
    await prisma.programExercice.create({
      data: req.body,
    });

    res.status(201).json("created");
  } catch (error) {
    res.status(400).json(error);
  }
};

// export const getProgramEx = async (req: Request, res: Response) => {
//   const id = +req.params.id;
//   try {
//     let progex = await prisma.programExercice.findMany({
//       where: { id: id },
//       select: {
//         sets: true,
//         reps: true,
//         program: {
//           select: {
//             name: true,
//             duration: true,
//             description: true,
//           },
//         },
//         Exercice: {
//           select: {
//             bodyPart: true,
//             equipment: true,
//             gifUrl: true,
//             name: true,
//             target: true,
//           },
//         },
//       },
//     });
//     res.status(200).send(progex);
//   } catch (error: any) {
//     res.status(400).json(error);
//   }
// };

export const getProgramEx = async (req: Request, res: Response) => {
  const programId = +req.params.id;
  try {
    const plan = await prisma.programExercice.findMany({
      where: {
        programId,
      },
      select: {
        sets: true,
        reps: true,
        Exercice: {
          select: {
            name: true,
            bodyPart: true,
            equipment: true,
            target: true,
            gifUrl: true,
          },
        },
      },
    });
    res.status(200).json(plan);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};


export const removeProgramEx = async  (req: Request, res: Response) => {
  const {programId} = req.params
  try{
    let removedProgram = await prisma.programExercice.delete({where:{id:+programId}})
    res.status(200).send("Program Exercice deleted successfully")
  }catch (err) {
    res.status(400).send(err)
  }
}