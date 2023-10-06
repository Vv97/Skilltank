import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import styles from "./MentorModel.module.css";
import axios from "axios";

const MentorBook = () => {
  const { id } = useParams();
  const [date, setDate] = useState<string>();
  const [start, setStart] = useState<string>();
  const [end, setEnd] = useState<string>();
  const navigate = useNavigate();

  const { Auth } = useAuth();

  const bookAppointment = async () => {
    const url = import.meta.env.VITE_APP_MENTOR_URL;
    const options = {
      headers: {
        authorization: Auth.accessToken,
      },
    };
    try {
      await axios
        .post(
          `${url}/${id}/availability`,
          {
            date,
            startTime: start,
            endTime: end,
          },
          options
        )
        .then((res) => {
          alert(res.data.message);
          navigate("/");
        });
    } catch (error) {
      console.log("Error While book Appointment", error);
    }
  };

  return (
    <div className={styles.mentorbook}>
      <div>
        <div>
          <img src="https://image.dummyjson.com/400x200/282828" alt="" />
          <p>{Auth.user.name}</p>
        </div>
        <div className={styles.metorBookDates}>
          <div className={styles.neterbookCon}>
            Date
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <div>
              <span>start time</span>
              <select value={start} onChange={(e) => setStart(e.target.value)}>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="11:00 PM">11:00 PM</option>
              </select>
            </div>
            <div>
              <span>end time</span>
              <select value={end} onChange={(e) => setEnd(e.target.value)}>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="11:00 PM">11:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <button onClick={bookAppointment}>Booking</button>
      </div>
    </div>
  );
};

export default MentorBook;
