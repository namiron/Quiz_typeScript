import React from "react";
import quiz from "./../modules/questions.module.scss";
import { RESULT } from "../command/constant";
import { IResult } from "../types/Types";
import { questions } from "../command/constant";
import img from "../image/confity.webp";

const Result: React.FC<IResult>  = ({ correct }) => {
  //-------------------------------
  const TITLE_RESULT = `Congratulations! You answered ${correct} out of ${questions.length} questions correctly.`;

  //-------------------------------

  return (
    <div className={quiz.result}>
      <div className={quiz.imageBox}>
        <img src={img} alt="" />
      </div>
      <h2 className={quiz.titleResult}>{TITLE_RESULT}</h2>
      <a href="/">
        <button className={quiz.restart}>{RESULT}</button>
      </a>
    </div>
  );
};

export default Result;

