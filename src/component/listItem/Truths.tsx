import * as React from 'react';
import { useContext } from 'react';
import { GamesContext } from '../../lib';

export default function Truths() {
  const { truths, bookMarks } = useContext(GamesContext);

  const truthsBookMark = bookMarks.filter((item) => item.type === 'truths')[0];

  console.log('truthsBookMark', truthsBookMark);

  return (
    <div ref={truthsBookMark.ref} className="gameListItem">
      <h2>The following things are true:</h2>

      {truths.map((truth, key) => {
        return <li key={key}>{truth.text}</li>;
      })}
    </div>
  );
}
