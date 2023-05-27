import * as React from 'react';

import { createContext, useState } from 'react';
import itemStructure from './itemStructure';

export const GamesContext = createContext(null);

export function GameProvider({ children }) {
  const [gameItems, setGameItems] = useState([
    itemStructure.rules.filter((item) => item.id == 0)[0],
  ]);

  const [truths, setTruths] = useState([]);

  function next(item) {
    console.log('clicked');

    const nextIndex = gameItems.filter(
      (thisItem) => thisItem.type == item.next
    ).length;

    const toInsert =
      itemStructure[item.next].filter((thisItem) => thisItem.id == nextIndex)
        .length > 0
        ? itemStructure[item.next].filter(
            (thisItem) => thisItem.id == nextIndex
          )[0]
        : null;

    if (toInsert) {
      setGameItems((prevList) => [...prevList, toInsert]);
    } else {
      return;
    }
  }

  function chooseOption(item, option) {
    const selectedTruth = {
      id: item.id,
      text: item.text + option.text,
    };

    setTruths((truths) => [...truths, selectedTruth]);
    next(item);
  }

  const values = { gameItems, setGameItems, next, chooseOption, truths };

  return (
    <GamesContext.Provider value={values}>{children}</GamesContext.Provider>
  );
}
