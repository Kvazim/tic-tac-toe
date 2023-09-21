import './style.css';
import { Cells } from '../../types/cells';
import Symbol from '../symbol/symbol';
import { getWinner } from '../../utils/utils';

type GameInfoProps = {
    isWin: string | null;
    cells: Cells;
    currentStep: string;
}

function GameInfo({isWin, cells, currentStep}: GameInfoProps):JSX.Element {
  if (getWinner(isWin, cells)) {
    return (
      <p className="game-info">Ничья</p>
    );
  }

  if (isWin) {
    return (
      <p className="game-info">
        Победитель:
        <Symbol symbol={isWin}/>
      </p>
    );
  }

  return (
    <p className="game-info">
      Ход:
      <Symbol symbol={currentStep}/>
    </p>
  );
}

export default GameInfo;
