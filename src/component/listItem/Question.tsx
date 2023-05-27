import * as React from 'react';
import { useContext } from 'react';
import { GamesContext } from '../../lib';

export default function Component({ item }) {
  const { next } = useContext(GamesContext);

  return (
    <div>
      <p>{item.text}</p>
      <p onClick={() => next(item.type)}>{item.arrow}</p>
      <p onClick={() => next(item.switch)}>
        Otherwise switch to {item.switch}.
      </p>
    </div>
  );
}
