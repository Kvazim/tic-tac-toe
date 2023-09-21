import { useState } from 'react';
import './style.css';
import { DefoultSymbol } from '../../const';
import { Cells } from '../../types/cells';
import { calculateWinner } from '../../utils/utils';
import ResetButton from '../reset-button/reset-button';
import GameInfo from '../game-info/game-info';
import ButtonCell from '../button-cell/button-cell';

function App(): JSX.Element {
  const [ cells, setCells ] = useState<Cells>([null, null, null, null, null, null, null, null, null]);
  const [ currentStep, setCurrentStep ] = useState(DefoultSymbol.Symbol_X);
  const [ isWin, setIsWin] = useState<string | null>(null);

  const onCellClick = (index: number) => {
    if (cells[index] || isWin) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    setCells(cellsCopy);

    const winner = calculateWinner(cellsCopy);
    setIsWin(winner);

    setCurrentStep(currentStep === DefoultSymbol.Symbol_X ? DefoultSymbol.Symbol_O : DefoultSymbol.Symbol_X);
  };

  return (
    <div className="game">
      <GameInfo isWin={isWin} cells={cells} currentStep={currentStep} />
      <div className={`game-field ${isWin ? 'game-field--win' : ''}`}>
        {
          cells.map((cell, index) => (
            <ButtonCell key={String(cell) + String(index)} cell={cell} isWin={isWin} onCellClick={() => onCellClick(index)}/>
          ))
        }
      </div>
      <ResetButton setCells={setCells} setCurrentStep={setCurrentStep} setIsWin={setIsWin}/>
    </div>
  );
}

export default App;
