import * as React from 'react';
import { useContext } from 'react';
import { GamesContext, itemStructure } from '../../lib';

export default function QuestionWrapper({ item }) {
  if (item.final) return <FinalQuestion item={item} />;
  else return <Question item={item} />;
}

function Question({ item }) {
  const { next } = useContext(GamesContext);

  return (
    <div className="gameListItem">
      <p>{item.text}</p>
      <p onClick={() => next('question', item.path)}>
        <u>{itemStructure.question[item.path].arrow}</u>
      </p>
      <p onClick={() => next('question', item.switch)}>
        <u>Otherwise switch to {item.switch}.</u>
      </p>
    </div>
  );
}

function FinalQuestion({ item }) {
  const { next } = useContext(GamesContext);

  return (
    <div className="gameListItem">
      <p>
        <b>{item.text}</b>
      </p>
      <p>
        <i>Each player need to answer this, however they wish.</i>
      </p>
      <p onClick={() => next('intro')}>
        <u>Decide as a group if this will end your game.</u>
      </p>
      <p onClick={() => next('startQuestions')}>
        <u>
          Otherwise, the Lich overcome the trials one more. Click here to go to
          the next question.
        </u>
      </p>
    </div>
  );
}
