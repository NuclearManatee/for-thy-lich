import * as React from 'react';
import { useState, useContext } from 'react';
import { GamesContext, GamesDispatchContext } from '../lib';
import ListItem from './listItem';

export default function Game() {
  const { gameItems, addGameItem } = useContext(GamesContext);
  const dispatch = useContext(GamesDispatchContext);

  function GameItem(game) {
    function next(game) {
      console.log(game.game.id);

      if (game.game.id == gameItems.length - 1) {
        addGameItem(game);
      } else {
        return;
      }
    }

    return (
      <>
        <div onClick={() => next(game, dispatch)}>{game.game.text} aaaa</div>
      </>
    );
  }

  return (
    <>
      {gameItems.map((gameItem) => (
        <ListItem key={gameItem.id} listItem={gameItem} />
      ))}
    </>
  );
}
