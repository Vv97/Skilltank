import { IMentor } from "../../types/mentors.types";
import styles from "../../pages/Mentor/Mentor.module.css";
import { useNavigate } from "react-router-dom";

const MentorList = ({ mentor = [] }: { mentor: Array<IMentor> }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/mentorsbook/${id}`);
  };

  return (
    <>
      {mentor.length > 0 &&
        mentor.map((res: IMentor, index) => (
          <div key={index}>
            <div className={styles.mentorsImage}>
              <img src="https://image.dummyjson.com/400x200/282828" alt="" />
            </div>
            <p>{res.name}</p>
            <span>{res.expertise.join(" ")}</span>
            <button onClick={() => handleNavigate(res._id)}>
              Book Appointment
            </button>
          </div>
        ))}
    </>
  );
};

export default MentorList;
