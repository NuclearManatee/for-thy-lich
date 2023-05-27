import * as React from 'react';

import { createContext, useState } from 'react';
export const GamesContext = createContext(null);

export function GameProvider({ children }) {
  const [gameItems, setGameItems] = useState([
    itemStructure.rules.filter((item) => item.id == 0),
  ]);

  function addGameItem(gameItem) {
    const newItem = {
      id: gameItems.length,
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

export const itemStructure = {
  rules: [
    {
      id: 0,
      type: 'rules',
      text: 'Read the Intro at loud.',
      helpText: 'Tap on the last box to proceed.',
      next: 'intro',
    },
    {
      id: 1,
      type: 'rules',
      text: 'Then choose your Truths from the corresponding sheet among the presented options to paint up the broad strokes of your world.',
      next: 'truth',
    },
  ],
  intro: [
    {
      id: 0,
      type: 'intro',
      text: 'The Lich once deceived Death and gained immortality, and she has been trying to end him ever since. He succeeded in banning her physical form from his Domain, a wicked land being shaped by his image generation after another.',
      next: 'intro',
    },
    {
      id: 1,
      type: 'intro',
      text: 'Keeping Death herself at bay, however, requires paying a price that keeps getting higher and higher, and even his peak mastery of the Dark Arts is proving insufficient. The Lich is now closer than ever to losing this strongarm with Death and his life with it.',
      next: 'intro',
    },
    {
      id: 2,
      type: 'intro',
      text: 'The Lich has many subjects, but you only are his chosen Servants, scourged not by Death but by the lack of her, wickedly corrupted by the Lich’s Domain. You, and no one else, are bound to assist him in his quest to beat Death once more. You’re bound to him because he keeps your souls enchained.',
      next: 'rules',
    },
  ],
};
