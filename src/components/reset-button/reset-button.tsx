import { DefoultSymbol } from '../../const';
import { Cells } from '../../types/cells';
import './style.css';

type ResetButtonProp = {
  setCells: (cells: Cells) => void;
  setCurrentStep: (defoultSymbol: DefoultSymbol) => void;
  setIsWin: (isWin: string | null) => void;
}

function ResetButton({setCells, setCurrentStep, setIsWin}: ResetButtonProp):JSX.Element {
  const onClickReset = () => {
    setCells(Array.from({length: 9}, () => null));
    setCurrentStep(DefoultSymbol.Symbol_X);
    setIsWin(null);
  };

  return (
    <button
      type='reset'
      className='game__reset'
      onClick={onClickReset}
    >
      Начать заново
    </button>
  );
}

export default ResetButton;
