import React from "react";
import reactLogo from "../assets/react-core-concepts.png";

const Header = () => {
  const startingWord = ["Core", "Crucial", "Fundamentals"];
  const getRandomInt = (max) => {
    const randomInd = Math.floor(Math.random() * max);
    return randomInd;
  };
  const description = startingWord[getRandomInt(startingWord.length)];

  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
