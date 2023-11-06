import { Fragment } from "react";

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

export default getJoke;
