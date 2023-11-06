import { Fragment } from "react";
import { ChatContext } from "../types/ChatBotTypes";

const getHelpMessage = (context?: ChatContext) => {
  const helpItems = [
    "Tell me about your experience",
    "What skills do you have?",
    "Can you tell me a joke?",
  ].filter((item) => {
    const key = `hasAsked${item.replace(/\s+/g, "")}` as keyof ChatContext;
    return !(context && context[key]);
  });

  const message = helpItems.length
    ? `Here are some things you can ask me: \n\n- ${helpItems.join("\n- ")}`
    : "It seems like we've covered a lot. Feel free to ask me anything else!";

  return (
    <Fragment>
      {message.split("\n").map((msg, index) => (
        <Fragment key={index}>
          {msg}
          <br />
        </Fragment>
      ))}
      <br />
      Let&apos;s try one of these, or feel free to ask something else!
    </Fragment>
  );
};

export default getHelpMessage;
