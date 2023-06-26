import * as React from 'react';

import { Game, Header } from './component';
import { GameProvider } from './lib';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export default function GameApp() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <div className="body-container">
            <Home />
          </div>
        </>
      ),
    },
    {
      path: '/game',
      element: (
        <>
          <Header />
          <div className="body-container">
            <Game />
          </div>
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}

function Home() {
  return (
    <>
      <p>
        an indie tabletop roleplaying game about being tied to an undead
        disgraced tyrant.
      </p>
      <p>
        <Link to={'/game'}>Start Game</Link>
      </p>
    </>
  );
}

function ErrorPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>You might want to start again from the home page.</p>
    </>
  );
}
