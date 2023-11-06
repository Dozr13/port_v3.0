import { Link } from "@mui/material";
import { Fragment } from "react";
import { Entities, Intent } from "../types/ChatBot";

interface ChatContext {
  hasAskedAboutExperience: boolean;
  hasAskedAboutSkills: boolean;
  hasHeardJoke: boolean;
}

const getGreeting = (context?: ChatContext) => {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  if (context?.hasAskedAboutExperience) {
    return (
      <Fragment>
        {greeting}! How can I assist you further with information about my work
        experience?
      </Fragment>
    );
  }

  return <>{greeting}! How can I help you today?</>;
};

const getHelpMessage = (context?: ChatContext) => {
  let message = "Here are some things you can ask me:";
  if (!context?.hasAskedAboutExperience) {
    message += "\n- Tell me about your experience";
  }
  if (!context?.hasAskedAboutSkills) {
    message += "\n- What skills do you have?";
  }
  if (!context?.hasHeardJoke) {
    message += "\n- Can you tell me a joke?";
  }

  return (
    <Fragment>
      {message}
      <br />
      <br />
      Let&apos;s try one of these, or feel free to ask something else!
    </Fragment>
  );
};

const getWellbeingResponse = () => (
  <Fragment>
    I&apos;m a chatbot, so I don&apos;t have feelings, but I&apos;m functioning
    at full capacity!
    <br />
    How can I assist you today?
  </Fragment>
);

const getExperience = () => [
  <>
    I&apos;ve been a full stack developer for 3 years, focusing on React,
    TypeScript, Next, Node, and PostgreSQL.
  </>,
  <>Curious to know more about my journey?</>,
  <Link
    href="/about#skills-and-experience"
    key={"about-link"}
    style={{ color: "#0d6efd" }}
  >
    About Wade
  </Link>,
];

const getSkills = (entities: Entities) => {
  if (entities.skill && entities.skill.includes("React")) {
    return (
      <Fragment>
        Absolutely! React forms the cornerstone of my developer toolkit.
        I&apos;ve delved deep into its intricacies and leveraged its power to
        build robust and interactive applications.
      </Fragment>
    );
  }
  return (
    <Fragment>
      My tech stack is a blend of modern web technologies. While React coupled
      with TypeScript is my go-to for frontend development, I&apos;ve also
      worked extensively with GraphQL for efficient data handling. Styling is
      another aspect I deeply care about; from pure CSS and SCSS to leveraging
      libraries like styled-components and frameworks like Material UI, I
      believe in creating interfaces that are not only functional but also
      aesthetically appealing.
    </Fragment>
  );
};

const getAboutMe = () => (
  <Fragment>
    I began in oilfields, learning teamwork, drive to work efficiently, and
    problem-solving. Later, I transitioned to software engineering.
    <br />
    <br />
    Want to know the full story?
    <br />
    <Link href="/about#journey-from-oilfields" style={{ color: "#0d6efd" }}>
      About Wade
    </Link>
  </Fragment>
);

const getJoke = () => {
  const jokes = [
    <Fragment key="joke1">
      Why did the React component keep crashing?
      <br />
      <br />
      Because it didn&apos;t have enough state.
    </Fragment>,
    <Fragment key="joke2">
      How do you comfort a JavaScript bug?
      <br />
      <br />
      You console it.
    </Fragment>,
    <Fragment key="joke3">
      Why did the developer go broke?
      <br />
      <br />
      Because he used up all his cache.
    </Fragment>,
    <Fragment key="joke4">
      Why did the developer stay calm?
      <br />
      <br />
      Because he was in control of the situation.
    </Fragment>,
    <Fragment key="joke5">
      Why did the web developer stay at his job?
      <br />
      <br />
      Because he didn&apos;t want to lose his position!
    </Fragment>,
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
};

const getContact = () => {
  return (
    <Fragment>
      I&apos;m happy to chat, reach out at:
      <br />{" "}
      <Link href="/contact" key={"about-link"} style={{ color: "#0d6efd" }}>
        Contact Form
      </Link>
    </Fragment>
  );
};

export const handleIntent = (
  intent: Intent,
  entities: Entities,
  unknownCount: number,
  setUnknownCount: React.Dispatch<React.SetStateAction<number>>,
  context?: ChatContext,
): JSX.Element | JSX.Element[] => {
  console.log("intent: ", intent);
  switch (intent) {
    case "get_greeting":
      return getGreeting(context);

    case "ask_wellbeing":
      return getWellbeingResponse();

    case "ask_experience":
      return getExperience();

    case "ask_skills":
      return getSkills(entities);

    case "about_me":
      return getAboutMe();

    case "get_joke":
      if (context) {
        context.hasHeardJoke = true; // ! WHAT IS THIS HERE WHAT DOES IT DO? YOU SUGGESTED IT
      }
      return getJoke();

    case "get_contact":
      return getContact();

    case "unknown_intent":
      setUnknownCount((prevCount) => prevCount + 1);
      if (unknownCount >= 1) {
        return getHelpMessage(context);
      }

      return (
        <Fragment>
          I&apos;m sorry, I didn&apos;t quite get that. Can you rephrase?
        </Fragment>
      );
    case "get_help":
      return getHelpMessage(context);

    default:
      setUnknownCount(0);
      return (
        <Fragment>
          I&apos;m sorry, I didn&apos;t understand. Please ask another question.
        </Fragment>
      );
  }
};
