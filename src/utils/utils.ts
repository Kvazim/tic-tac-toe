import { DefoultSymbol, WINER_LINES } from '../const';
import { Cells } from '../types/cells';

export const getSymbolSlassName = (symbol:string | null) => {
  if (symbol === DefoultSymbol.Symbol_O) {
    return 'symbol--o';
  }

  if (symbol === DefoultSymbol.Symbol_X) {
    return 'symbol--x';
  }

  return '';
};

export const calculateWinner = (squares: Cells) => {
  for (let i = 0; i < WINER_LINES.length; i++) {
    const [a, b, c] = WINER_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const getWinner = (win: string | null, squares: Cells) => !win && squares.filter((value) => value).length === 9;
export const getTitle = (win: string | null, squares: Cells) => {
  if (getWinner(win, squares)) {
    return 'Ничья';
  }
  if (win) {
    return 'Победитель:';
  }
  return 'Ход:';
};
