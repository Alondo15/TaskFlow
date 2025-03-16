"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import PageTitle from "./components/PageTitle/PageTitle";
import PastProjectsCarousel from "./components/PastProjectsCarousel/PastProjectsCarousel";
import DescriptionBar from "./components/DescriptionBar/DescriptionBar";

export default function Home() {
  const handleGenerate = () => {};
  return (
    <>
      <div>
        <PageTitle title="Welcome Back John Doe" />
        <h1 className="mb-4 font-semibold">Past Projects</h1>
        <PastProjectsCarousel />
      </div>
      <div className="generate">
        <h1>Generate A New Kanban Board</h1>
        <DescriptionBar onGenerate={handleGenerate} />
        <div className="examples">
          <p>Examples:</p>
          <button>Example 1</button>
          <button>Example 2</button>
          <button>Example 3</button>
        </div>
      </div>
    </>
  );
}
