import * as React from 'react';
import { useContext } from 'react';
import { GamesContext, itemStructure } from '../../lib';

export default function Intro({ item }) {
  const { gameItems, addGameItem } = useContext(GamesContext);

  const toInsert = itemStructure[item.next].filter((item) => item.id == 0)[0];
  console.log('toInsert');
  console.log(toInsert);

  function next() {
    console.log('clicked');
    addGameItem((prevList) => [...prevList, toInsert]);
  }

  return (
    <>
      <div onClick={() => next()}>
        <p>{item.text}</p>
        {item.helpText && (
          <p>
            <i>{item.helpText}</i>
          </p>
        )}
      </div>
    </>
  );
}

function addGameItem(gameItem) {}
