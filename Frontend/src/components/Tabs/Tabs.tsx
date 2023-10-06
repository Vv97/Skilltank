import styles from "./Tabs.module.css";
import { useState } from "react";

export const Tabs = () => {
  const [insideToggle, setinsideToggle] = useState<number>(1);

  return (
    <div>
      <div className={styles.inerTabsContainer}>
        <div className={styles.innerBlockTabs}>
          <h1>click</h1>
          <p
            className={
              insideToggle === 1
                ? `${styles.innertabs} ${styles.active_innertabs}`
                : styles.innertabs
            }
            onClick={() => setinsideToggle(1)}
          >
            click
          </p>
          <p
            className={
              insideToggle === 2
                ? `${styles.innertabs} ${styles.active_innertabs}`
                : styles.innertabs
            }
            onClick={() => setinsideToggle(2)}
          >
            setclick
          </p>
          <p
            className={
              insideToggle === 3
                ? `${styles.innertabs} ${styles.active_innertabs}`
                : styles.innertabs
            }
            onClick={() => setinsideToggle(3)}
          >
            returnclick
          </p>
        </div>

        <div className={styles.innerContainerTabs}>
          <div
            className={
              insideToggle === 1
                ? `${styles.innercontent} ${styles.active_innercontent}`
                : styles.innercontent
            }
          >
            <p>stage1</p>
          </div>
          <div
            className={
              insideToggle === 2
                ? `${styles.innercontent} ${styles.active_innercontent}`
                : styles.innercontent
            }
          >
            <p>stage2</p>
          </div>
          <div
            className={
              insideToggle === 3
                ? `${styles.innercontent} ${styles.active_innercontent}`
                : styles.innercontent
            }
          >
            <p>
              Illum fuga incidunt repellat quidem quaerat, veniam expedita eius
              accusamus, veritatis eos ad quia? Vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
