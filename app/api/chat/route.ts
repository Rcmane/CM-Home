import { NextRequest, NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "ai";
  content: string;
};

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function POST(req: NextRequest) {
  console.log("Received request for chat");
  const data = await req.json();
  const messages: ChatMessage[] = data.messages || [];

  // Gemini expects "parts" of content and "role" (user/assistant) alternately
  const geminiMessages = messages.map(msg => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  try {
    const apiRes = await fetch(`${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: geminiMessages,
        generationConfig: {
          maxOutputTokens: 250,
        }
      }),
    });

    if (!apiRes.ok) {
      throw new Error(`Gemini API returned status ${apiRes.status}`);
    }

    const result = await apiRes.json();
    // Gemini returns candidates with parts as response content
    const reply = result.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response from Gemini";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ reply: "Error contacting Gemini AI." }, { status: 500 });
  }
}
