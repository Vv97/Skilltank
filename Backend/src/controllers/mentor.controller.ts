import { Request, Response } from "express";
import mentorModel from "../model/mentors-model";
import mongoose, { Types } from "mongoose";

interface Iargs {
  _id?: mongoose.Types.ObjectId | undefined;
}

export const getMentorsHandler = async (req: Request, res: Response) => {
  try {
    const { _id } = req.query;

    const args: Iargs = {};

    if (_id) {
      args._id = new mongoose.Types.ObjectId(_id);
    }

    const data = await mentorModel.find(args);

    res.status(200).send({ mentors: data });
  } catch (error) {
    console.log("Error while getting mentors from database", error);
    res.status(400).send(error);
  }
};

export const postMentorHandler = async (req: Request, res: Response) => {
  try {
    const { name, mentorID, expertise } = req.body;

    if (!name && !mentorID && !expertise) {
      return res.status(400).send({ message: "fill all the details" });
    }

    const createMentor = await mentorModel.create({
      name,
      mentorID: res.locals.user.user,
      expertise,
    });

    res.status(200).send({ message: "mentor created successfully" });
  } catch (error) {
    console.log("Error while posting mentors", error);
    res.status(400).send(error);
  }
};

export const postMentorAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { date, startTime, endTime } = req.body;

    const mentor = await mentorModel.findById({ _id: id });

    if (!mentor) {
      return res.status(404).send("Mentor not found");
    }

    // Create a new availability slot
    mentor.availabilitySlots.push({ date, startTime, endTime });

    // Save the updated mentor document
    mentor.save();

    return res.status(200).send({ message: "slot book successfuly!" });
  } catch (error) {
    return res.status(500).send("Error updating mentor availability");
  }
};
