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

      {location.pathname === '/game' && 'aaaa' }
        {location.pathname === '/game' &&
          bookMarks.map((bookMark, key) => {
            <span key={key}>{bookMark.symbol} |</span>;
          })}
      </div>
    </div>
  );
}
