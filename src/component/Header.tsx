import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { GamesContext } from '../lib';

export default function Header() {
  const { bookMarks } = useContext(GamesContext);

  const location = useLocation();

  return (
    <div className="header-container">
      <Link to={'/'}>
        <div>
          <h1>For Thy Lich</h1>
        </div>
      </Link>
      <div>
        {location.pathname === '/game' &&
          bookMarks.map((bookMark, key) => {
            return (
              <span
                key={key}
                onClick={() => {
                  if (bookMark.ref.current)
                    bookMark.ref.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                      inline: 'center',
                    });
                }}
              >
                {bookMark.symbol} |
              </span>
            );
          })}
      </div>
    </div>
  );
}
