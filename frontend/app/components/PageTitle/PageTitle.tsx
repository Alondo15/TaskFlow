import React from "react";
import styles from "./PageTiTle.module.css";
import Image from "next/image";

type PageTiTleProps = {
  title: string;
};

const PageTitle: React.FC<PageTiTleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.settings}>
        <Image src={"/globe.svg"} width={24} height={24} alt="" />
      </div>
    </div>
  );
};

export default PageTitle;
