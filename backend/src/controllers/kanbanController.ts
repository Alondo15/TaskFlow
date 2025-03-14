import { Request, Response } from "express";
import { generateKanbanData } from "../services/openRouterService";

export const generateKanban = async (req: Request, res: Response) => {
  try {
    const userDescription: string = req.body.description;
    const kanbanData = await generateKanbanData(userDescription);
    res.json(kanbanData);
  } catch (error) {
    console.error("Error generating Kanban:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
