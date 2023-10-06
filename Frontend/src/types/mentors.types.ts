export interface IAvailabilitySlot {
  date: Date;
  startTime: string;
  endTime: string;
}

export interface IMentor {
  _id: string;
  name: string;
  mentorID: string;
  setShow?: (value: boolean) => void;
  expertise: string[];
  availabilitySlots: IAvailabilitySlot[] | [];
}

export interface IMentorResponse {
  mentors: IMentor[];
}
