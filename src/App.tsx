import * as React from 'react';

import { Game } from './component';
import { GameProvider } from './lib';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export default function GameApp() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: '/game',
      element: (
        <>
          <Header />
          <Game />
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

function Header() {
  return (
    <>
      <Link to={'/'}>
        <h1>For Thy Lich</h1>
      </Link>
    </>
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
