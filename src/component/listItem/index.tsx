import * as React from 'react';
import SimpleText from './SimpleText';
import Truth from './Truth';
import ChooseYourName from './ChooseYourName';
import Question from './Question';
import FinalQuestion from './FinalQuestion';

export default function ListItem({ listItem }) {
  switch (listItem.type) {
    case 'rules':
      return <SimpleText item={listItem} />;
    case 'intro':
      return <SimpleText item={listItem} />;
    case 'truth':
      return <Truth item={listItem} />;
    case 'chooseYourName':
      return <ChooseYourName />;
    case 'question':
      return <Question item={listItem} />;
    default:
      return <div>Unknown Type</div>;
  }
}
