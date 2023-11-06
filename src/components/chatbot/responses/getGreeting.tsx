import { Fragment } from "react";
import { getGreetingByHour } from "../chatUtils/UtilityFunctions";
import { ChatContext } from "../types/ChatBotTypes";

const getGreeting = (context?: ChatContext) => {
  const greeting = getGreetingByHour();
  const greetingMessage = context?.hasAskedAboutExperience
    ? `${greeting}! How can I assist you further with information about my work experience?`
    : `${greeting}! How can I help you today?`;

  return <Fragment>{greetingMessage}</Fragment>;
};

export default getGreeting;
