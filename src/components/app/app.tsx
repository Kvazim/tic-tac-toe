import { useState } from 'react';
import Symbol from '../symbol/symbol';
import './style.css';
import { DefoultSymbol } from '../../const';
import { Cells } from '../../types/cells';
import { calculateWinner } from '../../utils/utils';

function App(): JSX.Element {
  const [ cells, setCells ] = useState<Cells>([null, null, null, null, null, null, null, null, null]);
  const [ currentStep, setCurrentStep ] = useState(DefoultSymbol.Symbol_X);
  const [ isWin, setIsWin] = useState<string | null>(null);

  const onCellClick = (index: number) => {
    if (cells[index]) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    setIsWin(calculateWinner(cellsCopy));
    setCells(cellsCopy);
    setCurrentStep(currentStep === DefoultSymbol.Symbol_X ? DefoultSymbol.Symbol_O : DefoultSymbol.Symbol_X);
  };

  return (
    <div className={`game ${isWin ? 'game--win' : ''}`}>
      <p className="game-info">Ход: <Symbol symbol={currentStep}/></p>
      <div className="game-field">
        {
          cells.map((cell, index) => (
            <button
              key={String(cell) + String(index)}
              type='button'
              className={`cell ${isWin && isWin === cell ? 'cell--win' : ''}`}
              onClick={() => onCellClick(index)}
            >
              <Symbol symbol={cell}/>
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default App;