import React from "react";

const DEFAULT_IMG =
  "https://i.pinimg.com/originals/3a/0e/8e/3a0e8e6697854b1e604795c6a84db844.jpg";

export default function ChoiceCard(props) {
  const won = props.title === props.previousWinner;
  let className;
  const hasPreviousGame =
    props.previousWinner === "Computer" || props.previousWinner === "You";
  if (hasPreviousGame) {
    className = won ? "winner" : "loser";
  }

  let prompt;
  if (won) {
    prompt = "Won";
    className = won ? "winner" : "loser";
  } else if (props.previousWinner === "Tie") {
    prompt = "Tie";
  } else if (props.previousWinner === null) {
    prompt = "Start";
  } else {
    prompt = "Lose";
  }

  return (
    <div className={`choice-card ${className}`}>
      <h1>{props.title}</h1>
      <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
      <h3>{prompt}</h3>
    </div>
  );
}
