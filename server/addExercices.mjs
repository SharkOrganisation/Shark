import { PrismaClient } from "@prisma/client";
import axios from "axios"


const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "358d06ea4emsh91f1256ef5703a1p1540e5jsn66798568a014",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchExercices = async () => {

  const prisma = new PrismaClient();
  
  try {
    const response = await axios.request(options);
    const exercisesData = response.data.map(exercise => ({
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifUrl: exercise.gifUrl,
      name: exercise.name,
      target: exercise.target,
    }));
    await prisma.exercice.createMany({
      data: exercisesData
    })
  } catch (error) {
    console.error(error);
  }

}

fetchExercices()
