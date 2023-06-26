import * as React from 'react';

import { createContext, useState, useEffect, useRef } from 'react';
import itemStructure from './itemStructure';

export const GamesContext = createContext(null);

export function GameProvider({ children }) {
  const [gameItems, setGameItems] = useState([
    itemStructure.rules.filter((item) => item.id == 0)[0],
  ]);

  const [truths, setTruths] = useState([]);
  const numberOfTruth = 12;

  const [bookMarks, setBookMarks] = useState([
    {
      symbol: 'T',
      type: 'truths',
    },
  ]);

  const endOfListRef = useRef(null);
  const truthsRef = useRef(null);

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [gameItems]);

  useEffect(() => {
    if (truths.length === numberOfTruth) {
      const truthsItem = {
        symbol: 'T',
        type: 'truths',
        ref: truthsRef,
      };

      setGameItems((items) =>
        items.toSpliced(
          gameItems.findIndex((item) => item.type == 'truth'),
          numberOfTruth,
          truthsItem
        )
      );

      setBookMarks((refs) => [...refs, truthsItem]);
    }
  }, [truths]);

  function randomQuestionsPath() {
    const pathList = [];
    for (const key in itemStructure.question) {
      if (typeof itemStructure.question[key] === 'object') {
        pathList.push(key);
      }
    }
    return pathList[Math.floor(Math.random() * pathList.length)];
  }

  function next(nextItem, questionPath?: string) {
    if (nextItem == 'startQuestions') nextQuestion(randomQuestionsPath());
    else if (nextItem == 'question') nextQuestion(questionPath);
    else {
      const nextIndex = gameItems.filter(
        (thisItem) => thisItem.type == nextItem
      ).length;

      //console.log(`NEXT next is ${nextItem} and nextIndex is ${nextIndex} `);

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
  }

  function nextQuestion(nextPath) {
    //console.log(nextPath);

    const nextIndex =
      gameItems
        .filter((thisItem) => thisItem.type == 'question')
        .filter((thisItem) => thisItem.path == nextPath).length + 1;

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
  }

  function chooseOption(item, option) {
    const selectedTruth = {
      id: item.id,
      text: item.text + option.text,
    };

    setTruths((truths) => [...truths, selectedTruth]);

    next(item.next);
  }

  const values = {
    gameItems,
    setGameItems,
    randomQuestionsPath,
    next,
    chooseOption,
    truths,
    nextQuestion,
    endOfListRef,
    bookMarks,
  };

  return (
    <GamesContext.Provider value={values}>{children}</GamesContext.Provider>
  );
}
