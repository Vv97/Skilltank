import styles from "./CoursesTab.module.css";
import { BiSearch } from "react-icons/bi";

const CoursesTab = () => {
  return (
    <div className={styles.courses}>
      <div>
        <label htmlFor="">Subject</label>
        <input type="text" placeholder="Where do you Want to Study" />
      </div>
      <div>
        <div>
          <label htmlFor="">Where</label>
          <input
            type="text"
            placeholder="Your ideal country / region or institution"
          />
        </div>
        <button>
          <div className={styles.CouraseBtnCon}>
            <BiSearch />
            <span>Search</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CoursesTab;
