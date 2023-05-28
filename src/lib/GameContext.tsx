import * as React from 'react';

import { createContext, useState } from 'react';
import itemStructure from './itemStructure';

export const GamesContext = createContext(null);

export function GameProvider({ children }) {
  const [gameItems, setGameItems] = useState([
    itemStructure.rules.filter((item) => item.id == 0)[0],
  ]);

  const [truths, setTruths] = useState([]);

  function next(nextItem) {
    console.log('clicked');

    if (nextItem == 'startQuestions') {
      const pathList = [];
      for (const key in itemStructure.question) {
        if (typeof itemStructure.question[key] === 'object') {
          pathList.push(key);
        }
      }
      const initialPath = pathList[Math.floor(Math.random() * pathList.length)];

      console.log(`STARTQUESTION initialPath is ${initialPath} `);

      nextQuestion(initialPath);
    } else {
      const nextIndex = gameItems.filter(
        (thisItem) => thisItem.type == nextItem
      ).length;

      console.log(`NEXT next is ${nextItem} and nextIndex is ${nextIndex} `);

      const toInsert =
        itemStructure[nextItem].filter((thisItem) => thisItem.id == nextIndex)
          .length > 0
          ? itemStructure[nextItem].filter(
              (thisItem) => thisItem.id == nextIndex
            )[0]
          : null;

      if (toInsert) {
        setGameItems((prevList) => [...prevList, toInsert]);
      } else {
        return;
      }
    }

    scrollToBottom();
  }

  function chooseOption(item, option) {
    const selectedTruth = {
      id: item.id,
      text: item.text + option.text,
    };

    setTruths((truths) => [...truths, selectedTruth]);

    next(item.next);
  }

  function nextQuestion(nextPath) {
    console.log(nextPath);

    const nextIndex =
      gameItems
        .filter((thisItem) => thisItem.type == 'question')
        .filter((thisItem) => thisItem.path == nextPath).length + 1;

    console.log(
      `NEXTQUESTION nextPath is ${nextPath} and nextIndex is ${nextIndex} `
    );

    const nextQuestion =
      itemStructure.question[nextPath].questions.filter(
        (thisItem) => thisItem.id == nextIndex
      ).length > 0
        ? itemStructure.question[nextPath].questions.filter(
            (thisItem) => thisItem.id == nextIndex
          )[0]
        : null;

    if (nextQuestion) {
      setGameItems((prevList) => [...prevList, nextQuestion]);
    } else {
      return;
    }
    scrollToBottom();
  }

  function scrollToBottom() {}

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
