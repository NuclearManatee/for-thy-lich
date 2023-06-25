import * as React from 'react';
import { useContext } from 'react';
import { GamesContext } from '../../lib';

export default function Component({ item }) {
  const { chooseOption, truths } = useContext(GamesContext);

  const filteredTruth = truths.filter((truth) => truth.id == item.id);
  const selectedTruth = filteredTruth.length > 0 ? filteredTruth[0] : null;

  return (
    <>
      {selectedTruth ? (
        <div className="gameListItem">
          <p>{selectedTruth.text}</p>
        </div>
      ) : (
        <div className="gameListItem">
          {item.helpText && (
            <p>
              <i>{item.helpText}</i>
            </p>
          )}
          <p>{item.text}</p>
          <ul>
            {item.options.map((option, key) => {
              return (
                <>
                  <li onClick={() => chooseOption(item, option)}>
                    {option.text}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
