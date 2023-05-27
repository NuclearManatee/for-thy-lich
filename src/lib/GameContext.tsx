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

    if (item.next == 'startQuestions') {
      const pathList = [];
      for (const key in itemStructure.question) {
        if (typeof itemStructure.question[key] === 'object') {
          pathList.push(key);
        }
      }
      nextQuestion(pathList[Math.floor(Math.random() * pathList.length)]);
    } else {
    
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
  }

  function chooseOption(item, option) {
    const selectedTruth = {
      id: item.id,
      text: item.text + option.text,
    };

    setTruths((truths) => [...truths, selectedTruth]);

    
      next(item);
    }


  function nextQuestion(next) {
    const nextIndex = gameItems.filter(
      (thisItem) => thisItem.type == next
    ).length;

    const nextQuestion =
      itemStructure.question[next].questions.filter(
        (thisItem) => thisItem.id == nextIndex
      ).length > 0
        ? itemStructure.question[next].questions.filter(
            (thisItem) => thisItem.id == nextIndex
          )[0]
        : null;

    if (nextQuestion) {
      setGameItems((prevList) => [...prevList, nextQuestion]);
    } else {
      return;
    }
  }

  const values = {
    gameItems,
    setGameItems,
    next,
    chooseOption,
    truths,
    nextQuestion,
  };

  return (
    <GamesContext.Provider value={values}>{children}</GamesContext.Provider>
  );
}
