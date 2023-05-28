import * as React from 'react';
import { useContext } from 'react';
import { GamesContext, itemStructure } from '../lib';
import ListItem from './listItem';

export default function Game() {
  const { gameItems } = useContext(GamesContext);

  return (
    <>
      {gameItems.map((gameItem, key) => {
        return (
          <>
            <ListItem key={gameItem.type + gameItem.id} listItem={gameItem} />
          </>
        );
      })}
    </>
  );
}
