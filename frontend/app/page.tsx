"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [board, setBoard] = useState({
    tasks: [
      {
        id: 0,
        title: "",
        description: "",
        status: "",
        team: "",
        dueDate: "",
        priority: "",
      },
    ],
  });
  const [desc, setDesc] = useState("");
  const reqBody = {
    description: desc,
  };

  const handleClick = async () => {
    console.log("Started...");

    const response: any = await axios.post(
      "http://localhost:5000/api/generate-kanban",
      reqBody
    );

    setBoard(response.data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button onClick={handleClick}>Submit</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Team</th>
              <th>Due Date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {board.tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.team}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
