import React from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  title: string;
  color: string;
};

const Badge: React.FC<BadgeProps> = ({ title, color }) => {
  return <div className={styles.container}>{title}</div>;
};

export default Badge;
