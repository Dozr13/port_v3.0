import { ChatContext } from "../types/ChatBotTypes";

export const updateChatContext = (
  context: ChatContext | undefined,
  field: keyof ChatContext,
) => {
  if (context) {
    context[field] = true;
  }
};
