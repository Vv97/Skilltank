import { Router } from "express";
import {
  getMentorsHandler,
  postMentorAvailability,
  postMentorHandler,
} from "../controllers/mentor.controller";
import { checkRole, checkToken } from "../middleware/user.middlewatre";

const mentorRouter = Router();

//Get : /api/mentors
mentorRouter.get("/", getMentorsHandler);

mentorRouter.use(checkToken);

//Post : /api/mentors/create
mentorRouter.post("/", postMentorHandler);

//Post : /api/mentors/:id/availability
mentorRouter.post("/:id/availability", postMentorAvailability);

export default mentorRouter;
