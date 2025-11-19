import { useReducer } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

// Função auxiliar para calcular operação segura
const calculate = (a, b, op) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 0;
    default: return b;
  }
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'CLEAR':
      return { ...initialState };

    case 'ADD_DIGIT': {
      const n = action.payload;
      if (n === '.' && state.displayValue.includes('.')) return state;

      const clear = state.displayValue === '0' || state.clearDisplay;
      const displayValue = (clear ? '' : state.displayValue) + n;

      const values = [...state.values];
      if (n !== '.') {
        values[state.current] = parseFloat(displayValue);
      }

      return {
        ...state,
        displayValue,
        clearDisplay: false,
        values,
      };
    }

    case 'SET_OPERATION': {
      const op = action.payload;

      if (state.current === 0) {
        return { ...state, operation: op, current: 1, clearDisplay: true };
      }

      const equals = op === '=';
      const result = calculate(state.values[0], state.values[1], state.operation);
      const values = [result, 0];

      return {
        displayValue: result.toString(),
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      };
    }

    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addDigit = (n) => dispatch({ type: 'ADD_DIGIT', payload: n });
  const setOperation = (op) => dispatch({ type: 'SET_OPERATION', payload: op });
  const clearMemory = () => dispatch({ type: 'CLEAR' });

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>
  );
}