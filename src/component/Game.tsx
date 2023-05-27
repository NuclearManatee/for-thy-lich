import * as React from 'react';
import { useState, useContext } from 'react';
import { GamesContext, GamesDispatchContext } from '../lib';

export default function Game() {
  const games = useContext(GamesContext);
  const dispatch = useContext(GamesDispatchContext);

  function GameItem(game) {
    console.log(game.game.text);

    function next(game) {
      console.log(game.game.id);

      if (game.game.id == games.length - 1) {
        dispatch({
          type: 'added',
          id: game.game.id++,
          text: 'lallero',
        });
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
      {games.map((gameItem) => (
        <GameItem key={gameItem.id} game={gameItem} dispatch={dispatch} />
      ))}
    </>
  );
}
