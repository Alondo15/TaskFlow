import fs from "fs";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

export const generateKanbanData = async (userDescription: string) => {
  // Load AI prompt template
  const promptData = JSON.parse(fs.readFileSync("kanban_prompt.json", "utf-8"));
  const finalPrompt = `${promptData.instructions}\n\n${promptData.details}\n\nUser's description: ${userDescription}\n\n${promptData.task_requirements}`;
  const API_KEY = process.env.OPENROUTER_API_KEY;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemma-3-27b-it:free",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: finalPrompt,
              },
            ],
          },
        ],
      }),
    }
  );

  const jsonResponse: any = await response.json();

  const rawContent = jsonResponse.choices[0].message.content;

  // Extract JSON from OpenRouter's response
  const jsonMatch = rawContent.match(/```json\n([\s\S]*?)\n```/);

  if (jsonMatch && jsonMatch[1]) {
    return JSON.parse(jsonMatch[1]); // Return clean JSON
  } else {
    throw new Error("Invalid JSON format received from OpenRouter");
  }
};
