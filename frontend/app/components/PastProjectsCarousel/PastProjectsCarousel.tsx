import React from "react";
import styles from "./PastProjectsCarousel.module.css";
import CompactProjectCard from "../CompactProjectCard/CompactProjectCard";

const PastProjectsCarousel = () => {
  return (
    <div className={styles.container}>
      <CompactProjectCard
        title="PC Parts E-Commerce Website"
        status="ongoing"
        description="A Website For Sellin Laptops and Projects"
      />
      <CompactProjectCard
        title="PC Parts E-Commerce Website"
        status="ongoing"
        description="A Website For Sellin Laptops and Projects"
      />
      <CompactProjectCard
        title="PC Parts E-Commerce Website"
        status="ongoing"
        description="A Website For Sellin Laptops and Projects"
      />
      <CompactProjectCard
        title="PC Parts E-Commerce Website"
        status="ongoing"
        description="A Website For Sellin Laptops and Projects"
      />
    </div>
  );
};

export default PastProjectsCarousel;
