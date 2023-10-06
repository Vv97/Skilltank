import mongoose from "mongoose";

const Schema = mongoose.Schema;

const availabilitySlotSchema = new Schema({
  date: Date,
  startTime: String,
  endTime: String,
});

const mentorSchema = new Schema(
  {
    name: { type: String, require },
    mentorID: { type: mongoose.Types.ObjectId, ref: "users" },
    expertise: { type: [String], require },
    availabilitySlots: { type: [availabilitySlotSchema], default: [] },
    createdAt: { type: Date, default: new Date() },
    updateAt: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
  }
);

const mentorModel = mongoose.model("mentor", mentorSchema);

export default mentorModel;
