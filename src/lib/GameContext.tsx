import * as React from 'react';

import { createContext, useState } from 'react';
export const GamesContext = createContext(null);
export const GamesDispatchContext = createContext(null);

export function GameProvider({ children }) {
  const [gameItems, setGameItems] = useState(initialGames);

  function addGameItem(gameItem) {
    const newItem = {
      id: gameItems.length + 1,
      text: 'New Item',
      done: false,
    };

    setGameItems((prevList) => [...prevList, newItem]);
  }

  const values = { gameItems, addGameItem };

  return (
    <GamesContext.Provider value={values}>{children}</GamesContext.Provider>
  );
}
