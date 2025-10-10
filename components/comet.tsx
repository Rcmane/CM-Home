"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState, KeyboardEvent } from "react";
import { MessageCircleMore, Search } from "lucide-react"

type Message = {
  role: "user" | "ai";
  content: string;
};

export default function AIChatDialog(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  async function sendMessage() {
    console.log("Sending message:", input);
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    // Replace with your backend chat endpoint and adjust types as needed
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMsg] }),
    });
    const data: { reply: string } = await response.json();
    setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && input.trim()) sendMessage();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Chat
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 outline-none">
          <Dialog.Title className="text-xl font-semibold mb-2">Crossmap AI</Dialog.Title>
          <div className="grow min-h-[180px] max-h-64 overflow-y-auto border rounded p-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span className={msg.role === "user" ? "text-blue-500" : "text-gray-700"}>
                  {msg.role === "user" ? "You" : "Crossmap AI"}:
                </span>
                <span className="ml-1">{msg.content}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="border rounded flex-1 p-2"
              value={input}
              autoFocus
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="What you want to know…"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              disabled={!input.trim()}
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" aria-label="Close">
              ×
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
