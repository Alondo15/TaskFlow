import React from "react";
import styles from "./Description.module.css";

type DescriptionProps = {
  onGenerate: () => void;
};

const DescriptionBar: React.FC<DescriptionProps> = ({ onGenerate }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Create A Kanban Board For A E-Commerce Website That..."
      />
      <button onClick={onGenerate}>Generate</button>
    </div>
  );
};

export default DescriptionBar;
