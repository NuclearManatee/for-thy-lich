import * as React from 'react';

export default function Intro({ item }) {
  return (
    <>
      <div>
        <p>{item.text}</p>
        {item.helpText && (
          <p>
            <i>{item.helpText}</i>
          </p>
        )}
      </div>
    </>
  );
}
