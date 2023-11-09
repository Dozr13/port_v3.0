import { Fragment } from "react";
import { updateChatContext } from "../chatUtils/ChatUtils";
import {
  askLove,
  getAboutMe,
  getAchievement,
  getContact,
  getExperience,
  getGreeting,
  getHelpMessage,
  getHireMe,
  getJoke,
  getSkills,
  getThanks,
  getWellbeing,
} from "../responses";
import { ChatContext, Entities, Intent } from "../types/ChatBotTypes";

const intentHandlers: Record<string, Function> = {
  about_me: getAboutMe,
  ask_achievement: getAchievement,
  ask_experience: getExperience,
  ask_love: askLove,
  ask_skills: getSkills,
  ask_wellbeing: getWellbeing,
  get_contact: getContact,
  get_greeting: (context: ChatContext) => getGreeting(context),
  get_help: (context: ChatContext) => getHelpMessage(context),
  get_hired: getHireMe,
  get_joke: (context: ChatContext) => {
    updateChatContext(context, "hasHeardJoke");
    return getJoke();
  },
  get_thanks: getThanks,
};

export const handleIntent = (
  intent: Intent,
  entities: Entities,
  unknownCount: number,
  setUnknownCount: React.Dispatch<React.SetStateAction<number>>,
  context?: ChatContext,
): JSX.Element | JSX.Element[] => {
  // console.log("intent: ", intent);

  const handler = intentHandlers[intent];

  if (handler) {
    return handler(context);
  } else {
    // Handle unknown intent
    setUnknownCount((prevCount) => prevCount + 1);
    if (unknownCount >= 1) {
      return getHelpMessage(context);
    }

    return (
      <Fragment>
        I&apos;m sorry, I didn&apos;t quite get that. Can you rephrase?
      </Fragment>
    );
  }
};
