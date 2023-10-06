import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.database";
import userRouter from "./routes/user-route";
import mentorRouter from "./routes/mentor-route";
dotenv.config();
const port = process.env.port;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "welcome" });
});

app.use("/api/users", userRouter);
app.use("/api/mentors", mentorRouter);

//  First establish a connection to the database then proceed with running the server.
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at ${port} port successfully`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to the database.", error);
  });
