import React from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  progress: number;
  color: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={
          {
            "--progress": `${progress}%`,
            "--bar-color": `${color}`,
          } as React.CSSProperties
        }
      ></div>
    </div>
  );
};

export default ProgressBar;
