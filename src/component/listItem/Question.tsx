import * as React from 'react';
import { useContext } from 'react';
import { GamesContext, itemStructure } from '../../lib';

export default function QuestionWrapper({ item }) {
  const { nextQuestion } = useContext(GamesContext);

  if (item.final) return <FinalQuestion item={item} />;
  else return <Question item={item} />;
}

function Question({ item }) {
  const { nextQuestion } = useContext(GamesContext);

  return (
    <div>
      <p>{item.text}</p>
      <p onClick={() => nextQuestion(item.path)}>
        {itemStructure.question[item.path].arrow}
      </p>
      <p onClick={() => nextQuestion(item.switch)}>
        Otherwise switch to {item.switch}.
      </p>
    </div>
  );
}

function FinalQuestion({ item }) {
  const { next } = useContext(GamesContext);

  return (
    <div>
      <p>
        <b>{item.text}</b>
      </p>
      <p>
        <i>Each player need to answer this, however they wish.</i>
      </p>
      <p onClick={() => next('intro')}>
        Decide as a group if this will end your game.
      </p>
      <p onClick={() => next('startQuestions')}>
        Otherwise, the Lich overcome the trials one more. Click here to go to
        the next question.
      </p>
    </div>
  );
}
