import * as React from 'react';

import { createContext, useReducer } from 'react';
export const GamesContext = createContext(null);
export const GamesDispatchContext = createContext(null);

export function GameProvider({ children }) {
  const [games, dispatch] = useReducer(gamesReducer, initialGames);

  return (
    <GamesContext.Provider value={games}>
      <GamesDispatchContext.Provider value={dispatch}>
        {children}
      </GamesDispatchContext.Provider>
    </GamesContext.Provider>
  );
}

function gamesReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialGames = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
  { id: 3, text: 'Drink pollo', done: false },
];
