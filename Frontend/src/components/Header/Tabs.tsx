import { useState } from "react";
import styles from "./Header.module.css";
import Blocktab from "../blocktab/BlockTab";
import CoursesTab from "../coursescon/CoursesTab";
import ToggleContent from "../toggleContent/ToggleContent";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className={styles.tabsHead}>
      <div className={styles.tabsContainer}>
        <div className={styles.blockTabsContainer}>
          <div className={styles.blockTabs}>
            <Blocktab
              label="Courses"
              value={1}
              target={1}
              toggleState={toggleState}
              toggleTab={toggleTab}
            />
            <Blocktab
              label="Services"
              value={2}
              target={2}
              toggleState={toggleState}
              toggleTab={toggleTab}
            />
          </div>
        </div>

        <div className={styles.containerTabs}>
          <ToggleContent
            value={1}
            toggleState={toggleState}
            ShowComponent={CoursesTab}
          />
          <ToggleContent value={2} toggleState={toggleState} />
        </div>
      </div>
    </div>
  );
};
