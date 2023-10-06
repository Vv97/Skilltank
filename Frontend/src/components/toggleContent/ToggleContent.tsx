import React from "react";
import styles from "../Header/Header.module.css";

const ToggleContent = ({
  value,
  toggleState,
  ShowComponent,
}: {
  value: number;
  toggleState: number;
  ShowComponent?: React.ComponentType;
}) => {
  return (
    <div
      className={
        toggleState === value
          ? `${styles.content} ${styles.active_content}`
          : styles.content
      }
    >
      {ShowComponent && (
        <>
          <ShowComponent />
        </>
      )}
    </div>
  );
};

export default ToggleContent;
