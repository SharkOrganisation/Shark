import express, { Application, Request, Response } from "express";
import cors from "cors";

import followingGym from "./routes/followingGym_route";
import followingCoach from "./routes/followingCoach_route";
import coachFollowGym from "./routes/CoachFollowGym";
import savedPost from "./routes/savedPost_route";
const app: Application = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

//Gym Followers:
app.use("/api/followingGym", followingGym);

// Coach Followers:
app.use("/api/followingCoach", followingCoach);

// Gym Coach Followers:
app.use("/api/coachFollowGym", coachFollowGym);

// Saved Post :
app.use("/api/savedPost", savedPost);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
