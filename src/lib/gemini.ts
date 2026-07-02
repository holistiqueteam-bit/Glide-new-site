import { GoogleGenAI } from '@google/genai';

const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export async function askGemini(prompt: string): Promise<string> {
  if (!apiKey) {
    return "API Key is missing. Please add your VITE_GEMINI_API_KEY inside the .env file in the project root folder to start chatting.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ]
    });

    return response.text || "No response text received from Gemini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Failed to fetch response from Gemini. Please verify your VITE_GEMINI_API_KEY inside your .env file is correct. \n\nDetails: ${error instanceof Error ? error.message : String(error)}`;
  }
}
