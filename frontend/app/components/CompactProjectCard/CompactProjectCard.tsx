import React from "react";
import styles from "./CompactProjectCard.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Badge from "../Badge/Badge";
import Link from "next/link";

type CardProps = {
  title: string;
  status: string;
  description: string;
};

const CompactProjectCard: React.FC<CardProps> = ({
  title,
  status,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{title}</h1>
        <Badge title={status} color="red" />
      </div>
      <div className={styles.bottom}>
        <p>{description}</p>
        <ProgressBar progress={30} color="#575ec2" />
        <Link href={"/"}>View</Link>
      </div>
    </div>
  );
};

export default CompactProjectCard;
