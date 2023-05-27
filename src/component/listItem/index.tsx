import * as React from 'react';
import Intro from './Intro';
import Truth from './Truth';
import ChooseYourName from './ChooseYourName';
import Question from './Question';
import FinalQuestion from './FinalQuestion';

export default function ListItem({ listItem }) {
  switch (listItem.type) {
    case 'intro':
      return (
        <>
          <Intro item={listItem} />
        </>
      );
    case 'truth':
      return <Truth item={listItem} />;
    case 'chooseYourName':
      return <ChooseYourName />;
    case 'question':
      return <Question item={listItem} />;
    case 'finalQuestion':
      return <FinalQuestion item={listItem} />;
    default:
      return <div>Unknown Type</div>;
  }
}
