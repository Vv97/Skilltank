import styles from "../Header/Header.module.css";

const Blocktab = ({
  label,
  target,
  toggleState,
  toggleTab,
  value,
}: {
  label: string;
  value: number;
  target: number;
  toggleState: number;
  toggleTab: (index: number) => void;
}) => {
  return (
    <p
      className={
        toggleState === value
          ? `${styles.tabs} ${styles.active_tabs}`
          : styles.tabs
      }
      onClick={() => toggleTab(target)}
    >
      {label}
    </p>
  );
};

export default Blocktab;
