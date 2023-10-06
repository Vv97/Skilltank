import { useEffect, useState } from "react";
import { IMentor, IMentorResponse } from "../../types/mentors.types";
import styles from "./Mentor.module.css";
import axios, { AxiosResponse } from "axios";
import MentorList from "../../components/mentorlist/MentorList";

const Mentors = () => {
  const [mentor, setMentor] = useState<IMentor[] | []>([]);
  const getMentors = async () => {
    const url = import.meta.env.VITE_APP_MENTOR_URL;
    try {
      await axios.get(url).then((res: AxiosResponse<IMentorResponse>) => {
        setMentor(res.data.mentors);
      });
    } catch (error) {
      console.log("Error while fetcing mentors data", error);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className={styles.mentor}>
      <div className={styles.mentorsGrid}>
        <MentorList mentor={mentor} />
      </div>
    </div>
  );
};

export default Mentors;
