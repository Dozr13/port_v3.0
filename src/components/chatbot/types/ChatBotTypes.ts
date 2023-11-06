import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type Message = {
  sender: "user" | "bot";
  content: string | JSX.Element | JSX.Element[];
};

export type Intent = string;

export interface Entities {
  skill?: string[];
  location?: string[];
  datetime?: string[];
}

export interface ChatContext {
  hasAskedAboutExperience: boolean;
  hasAskedAboutSkills: boolean;
  hasHeardJoke: boolean;
}

export interface ChatbotProps {
  sx?: React.CSSProperties;
}

export interface MessageInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
}

export interface MessageListProps {
  messages: Message[];
  messagesEndRef: MutableRefObject<HTMLDivElement | null>;
}
