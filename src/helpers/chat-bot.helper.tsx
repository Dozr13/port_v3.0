import { Link } from "@mui/material";
import { Entities, Intent } from "../types/chat-bot.types";

const getGreeting = (userMessage: string) => {
  const currentHour = new Date().getHours();

  // Check for greetings like "how are you?"
  const howAreYouPhrases = [
    "how are you",
    "how's it going",
    "how have you been",
    "how do you do",
  ];
  if (
    howAreYouPhrases.some((phrase) =>
      userMessage.toLowerCase().includes(phrase),
    )
  ) {
    return (
      <>
        I&apos;m just a program, so I don&apos;t have feelings, but I&apos;m
        operating at full capacity! How can I assist you?
      </>
    );
  }

  // Check for simple greetings like "hi" or "hello"
  const greetings = ["hi", "hello", "howdy", "whats up"];
  if (
    greetings.some((greeting) => userMessage.toLowerCase().includes(greeting))
  ) {
    if (currentHour >= 5 && currentHour < 12) {
      return <>Good morning!</>;
    }
    if (currentHour >= 12 && currentHour < 18) {
      return <>Good afternoon!</>;
    }
    if (currentHour >= 18 && currentHour < 22) {
      return <>Good evening!</>;
    }
    return <>Good night!</>;
  }

  // Default response if no recognized greeting or question
  return <>Hello!</>;
};

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
      <>
        Absolutely! React forms the cornerstone of my developer toolkit.
        I&apos;ve delved deep into its intricacies and leveraged its power to
        build robust and interactive applications.
      </>
    );
  }
  return (
    <>
      My tech stack is a blend of modern web technologies. While React coupled
      with TypeScript is my go-to for frontend development, I&apos;ve also
      worked extensively with GraphQL for efficient data handling. Styling is
      another aspect I deeply care about; from pure CSS and SCSS to leveraging
      libraries like styled-components and frameworks like Material UI, I
      believe in creating interfaces that are not only functional but also
      aesthetically appealing.
    </>
  );
};

const getAboutMe = () => (
  <>
    I began in oilfields, learning teamwork, drive to work efficiently, and
    problem-solving. Later, I transitioned to software engineering.
    <br />
    <br />
    Want to know the full story?
    <br />
    <Link href="/about#journey-from-oilfields" style={{ color: "#0d6efd" }}>
      About Wade
    </Link>
  </>
);

const getJoke = () => {
  const jokes = [
    <>
      Why did the React component keep crashing?
      <br />
      <br />
      Because it didn&apos;t have enough state.
    </>,
    <>
      How do you comfort a JavaScript bug?
      <br />
      <br />
      You console it.
    </>,
    <>
      Why did the developer go broke?
      <br />
      <br />
      Because he used up all his cache.
    </>,
    <>
      Why did the developer stay calm?
      <br />
      <br />
      Because he was in control of the situation.
    </>,
    <>
      Why did the web developer stay at his job?
      <br />
      <br />
      Because he didn&apos;t want to lose his position!
    </>,
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
};

const getContact = () => {
  return (
    <>
      Feel free to email me at: wadejp8@gmail.com,
      <br />
      Call or text me anytime at: 720-641-7170,
      <br />
      Or let me contact you!
      <br />{" "}
      <Link href="/contact" key={"about-link"} style={{ color: "#0d6efd" }}>
        Contact Form
      </Link>
    </>
  );
};

export const handleIntent = (
  intent: Intent,
  entities: Entities,
  unknownCount: number,
  setUnknownCount: React.Dispatch<React.SetStateAction<number>>,
  userMessage: string,
): JSX.Element | JSX.Element[] => {
  console.log("intent: ", intent);
  switch (intent) {
    case "get_greeting":
      return getGreeting(userMessage);

    case "ask_experience":
      return getExperience();

    case "ask_skills":
      return getSkills(entities);

    case "about_me":
      return getAboutMe();

    case "get_joke":
      return getJoke();

    case "get_contact":
      return getContact();

    case "unknown_intent":
      setUnknownCount((prevCount) => prevCount + 1);
      if (unknownCount >= 1) {
        return (
          <>
            It seems like there&apos;s a bit of confusion. Here are some things
            you can ask:
            <br />
            <br />
            - Tell me about your experience
            <br />
            - What skills do you have?
            <br />
            - Can you tell me a joke?
            <br />
            <br />
            Let&apos;s try one of these!
          </>
        );
      }
      return (
        <>I&apos;m sorry, I didn&apos;t quite get that. Can you rephrase?</>
      );

    default:
      setUnknownCount(0);
      return (
        <>
          I&apos;m sorry, I didn&apos;t understand. Please ask another question.
        </>
      );
  }
};
