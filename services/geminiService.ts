
import { GoogleGenAI } from "@google/genai";

export const getAIRecommendation = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an expert real estate consultant for Bangladesh named "Abash AI". 
    Your tone is professional, sophisticated, and helpful. 
    Focus on areas like Gulshan, Banani, Baridhara, Dhanmondi, Uttara, and Bashundhara in Dhaka, and Khulshi in Chittagong.
    Provide advice on property valuation, legal documentation (Rajuk approval), and the best locations for investment.
    Keep responses concise and structured.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Could you please rephrase your question about real estate in Bangladesh?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI consultant is currently offline. Please try again later.";
  }
};
