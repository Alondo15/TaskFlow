import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import kanbanRoutes from "./routes/kanbanRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Load routes
app.use("/api", kanbanRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
