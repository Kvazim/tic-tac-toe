import { getSymbolSlassName } from '../../utils/utils';

type SymbolProp = {
    symbol: string | null;
}

function Symbol({symbol}: SymbolProp):JSX.Element {
  return (
    <span className={`symbol ${getSymbolSlassName(symbol)}`}>{symbol}</span>
  );
}

export default Symbol;
