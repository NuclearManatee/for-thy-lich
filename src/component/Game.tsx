import * as React from 'react';
import { useState, useContext } from 'react';
import { GamesContext } from '../lib';
import ListItem from './listItem';

export default function Game() {
  const { gameItems } = useContext(GamesContext);

  return (
    <>
      {gameItems.map((gameItem, index) => {
        console.log('GameItem');
        console.log(gameItem[0]);
        console.log(index);
        return (
          <>
            <ListItem
              key={gameItem[0].id.toString() + gameItem[0].type}
              listItem={gameItem}
            />
          </>
        );
      })}
    </>
  );
}
