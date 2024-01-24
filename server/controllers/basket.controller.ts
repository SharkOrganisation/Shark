import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getOneBasketByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const basket = await prisma.basket.findMany({
      where: {
        userId,
      },
      include: {
        Product: true,
      },
    });

    if (!basket || basket.length === 0) {
      res.status(404).json({ error: 'Basket not found' });
      return;
    }

    res.json(basket);
  } catch (error) {
    console.error('Error fetching basket:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getOneBasketByGymId = async (req: Request, res: Response) => {
  const gymId = req.params.id
  try {
    const basket = await prisma.basket.findMany({
      where: {
         gymId,
      },
      include: {
        Product: true,
       
      },
    });

    if (!basket) {
      res.status(404).json({ error: "Basket not found" });
      return;
    }

    res.json(basket);
  } catch (error) {
    console.error("Error fetching basket:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
export const getOneBasketByCoachId = async (req: Request, res: Response) => {
  const coachId = req.params.id
  try {
    const basket = await prisma.basket.findMany({
      where: {
         coachId,
      },
      include: {
        Product: true,
       
      },
    });

    if (!basket) {
      res.status(404).json({ error: "Basket not found" });
      return;
    }

    res.json(basket);
  } catch (error) {
    console.error("Error fetching basket:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const addToBasket = async (req: Request, res: Response): Promise<void> => {
  const { userId, productId, coachId, gymId } = req.body;

  console.log(req.body);
  try {
  
    await prisma.basket.create({
      data: {
        productId,
        userId: userId ? String(userId) : null,
        coachId,
        gymId,
      },
    });
  
    res.status(201).send("successful");
  } catch (error) {
    // Handle error
    console.error("Error creating basket item:", error);
    
    if (error instanceof Error) {
      res.status(500).json({ error: error.message || "Server Error" });
    } else {
      res.status(500).json({ error: "Unknown Server Error" });
    }
  }
}


export const deleteBasket = async (req: Request, res: Response) => {
  try {
  const basketId = +req.params.id;
  const role = req.params.role;
  const idConnected=req.params.idConnected
  let whereClause: any = {};
  console.log(role,"=",idConnected,"=",basketId);
  
  if (role === 'user') {
   const userId =idConnected;
   whereClause = { ...whereClause, userId, productId: basketId };
  } else if (role === 'coach') {
   const coachId =idConnected;
   whereClause = { ...whereClause, coachId , productId: basketId };
  } else if (role === 'gym') {
   const gymId =idConnected;
   whereClause = { ...whereClause, gymId , productId: basketId };
  } else {
   return res.status(400).json({ error: 'Invalid role' });
  }
  console.log('Constructed Where Clause:', whereClause);
  
  const deletedBasket = await prisma.basket.deleteMany({
    where: whereClause,
  });
  
  console.log('Deleted Basket:', deletedBasket);
  
  if (deletedBasket.count > 0) {
   res.json({ message: 'Basket deleted successfully' });
  } else {
   res.json({ message: 'No matching basket found for deletion' });
  }
  } catch (error: any) {
  console.error('Error deleting basket:', error);
  res.status(500).json({ error: (error as Error).message });
  }
 };
 
 
 
 


  
 export const updateBasket = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const { Product, User, Coach, Gym } = req.body;

    const updatedBasket = await prisma.basket.update({
      where: {
        id: id,
      },
      data: {
        Product: Product,
        User: User,
        Coach: Coach,
        Gym: Gym,
      },
      include: {
        Product: true,
        User: true,
        Coach: true,
        Gym: true,
      },
    });

    res.json(updatedBasket);
  } catch (error) {
    console.error("Error updating basket:", error);
    res.status(500).json({ error: "Server Error" });
  }
};