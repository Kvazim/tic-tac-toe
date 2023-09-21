import { Cell } from '../../types/cells';
import Symbol from '../symbol/symbol';
import './style.css';

type ButtonCellProps = {
  cell: Cell;
  isWin: string | null;
  onCellClick: () => void;
}

function ButtonCell({cell, isWin, onCellClick}: ButtonCellProps):JSX.Element {
  return (
    <button
      type='button'
      className={`cell ${isWin && isWin === cell ? 'cell--win' : ''}`}
      onClick={onCellClick}
    >
      <Symbol symbol={cell}/>
    </button>
  );
}

export default ButtonCell;
