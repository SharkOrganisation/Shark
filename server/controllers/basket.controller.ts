import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllBasket = async (req: Request, res: Response) => {
  try {
    const baskets = await prisma.basket.findMany({
      include: {
        Product: true,
        User: true,
        Coach: true,
        Gym: true,
      },
    });

    res.json(baskets);
  } catch (error) {
    console.error("Error fetching baskets:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getOneBasketByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id
  try {
    const basket = await prisma.basket.findMany({
      where: {
         userId,
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

  try {
    console.log(req.body);

    const item = await prisma.basket.create({
      data: {
        productId,
        userId: String(userId), 
        coachId,
        gymId,
      },
    });

    res.status(201).send("successful");
  } catch (error) {
    console.error("Error creating basket item:", error);

    if (error instanceof Error) {
      res.status(500).json({ error: error.message || "Server Error" });
    } else {
      res.status(500).json({ error: "Unknown Server Error" });
    }
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

export const deleteBasket = async (req: Request, res: Response) => {
  try {
    const productId = +req.params.id;
    const deletedBasket = await prisma.basket.deleteMany({
      where: {
        productId,
      },
    });

    res.json(deletedBasket);
  } catch (error) {
    console.error("Error deleting basket:", error);
    res.status(500).json({ error: "Server Error" });
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
