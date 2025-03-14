import express from "express";
import { generateKanban } from "../controllers/kanbanController";

const router = express.Router();

// Route for generating Kanban board
router.post("/generate-kanban", generateKanban);

export default router;
