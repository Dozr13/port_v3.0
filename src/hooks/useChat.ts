import { useCallback, useRef, useState } from "react";
import { handleIntent } from "../components/chatbot/services/handleIntent";
import { ChatContext, Message } from "../components/chatbot/types/ChatBotTypes";

const initialChatContext: ChatContext = {
  hasHeardJoke: false,
  hasAskedAboutExperience: false,
  hasAskedAboutSkills: false,
};

export function useChat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [unknownCount, setUnknownCount] = useState<number>(0);
  const [context, setContext] = useState(initialChatContext);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const getWitAiResponse = async (text: string) => {
    const response = await fetch(
      `https://api.wit.ai/message?q=${encodeURIComponent(text)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_WIT_SERVER_ACCESS_TOKEN}`,
        },
      },
    );

    const data = await response.json();
    // console.log(data);

    const intent = data?.intents?.[0]?.name || "unknown_intent";
    const entities = data?.entities;

    return { intent, entities };
  };

  const handleSubmit = async () => {
    if (input.trim() === "") return;

    // Adding user message
    setMessages((prev) => [...prev, { sender: "user", content: input.trim() }]);

    const { intent, entities } = await getWitAiResponse(input.trim());

    if (intent !== "unknown_intent") {
      setUnknownCount(0);
    } else {
      setUnknownCount((prevCount) => prevCount + 1);
    }

    const botReply = handleIntent(
      intent,
      entities,
      unknownCount,
      setUnknownCount,
      context,
    );

    setMessages((prev) => [...prev, { sender: "bot", content: botReply }]);

    scrollToBottom();
    setInput("");
  };

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    input,
    setInput,
    messages,
    handleSubmit,
    messagesEndRef,
    scrollToBottom,
    context,
    setContext,
  };
}
