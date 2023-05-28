import * as React from 'react';
import { useContext } from 'react';
import { GamesContext } from '../../lib';

export default function SimpleText({ item }) {
  const { next } = useContext(GamesContext);

  return (
    <div onClick={() => next(item.next)}>
      <p>{item.text}</p>
      {item.helpText && (
        <p>
          <i>{item.helpText}</i>
        </p>
      )}
    </div>
  );
}
