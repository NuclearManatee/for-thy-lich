import * as React from 'react';
import { useContext } from 'react';
import { GamesContext, itemStructure } from '../lib';
import ListItem from './listItem';

export default function Game() {
  const { gameItems, endOfListRef } = useContext(GamesContext);

  return (
    <div className="gameListContainer">
      {gameItems.map((gameItem, key) => {
        return <ListItem key={key} listItem={gameItem} />;
      })}
      <div ref={endOfListRef} className="gameListEndElement"></div>
    </div>
  );
}
