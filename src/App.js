import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

const initArr = [],
  initDisplay = 0,
  initInput = undefined;

const doMath = (arr) => {
  // @NOTE: need to refactor eval()
  const MATH_OPERATION = eval(arr.join(''));
  console.log('MATH:', MATH_OPERATION);
  return MATH_OPERATION;
};

function App() {
  const [arr, setArr] = useState(initArr);
  const [display, setDisplay] = useState(initDisplay);
  const [currentInput, setCurrentInput] = useState(initInput);
  const [currentOperator, setCurrentOperator] = useState(initInput);
  const clearState = () => {
    setArr(initArr);
    setDisplay(initDisplay);
    setCurrentInput(initInput);
    setCurrentOperator(initInput);
    console.clear();
  };
  const handleNum = (num) => {
    setDisplay((prevState) => {
      if (prevState !== 0 && currentInput === initInput) {
        const numbers = prevState + String(num);
        return Number(numbers);
      }
      return num;
    });
    // reset current input & operator state
    setCurrentInput(initInput);
    setCurrentOperator(initInput);
  };
  const handleOperator = (op) => {
    setCurrentInput(display);
    setCurrentOperator(op);
    setArr((prevState) => {
      // if currentOperator present, replace it
      if (currentOperator) {
        const rmOperator = prevState.slice(0, -1);
        return rmOperator.concat(op);
      }
      const newArr = prevState.concat(display).concat(op);

      // @NOTE: need to refactor ?
      const currentResult = doMath(newArr.slice(0, -1));
      setDisplay(currentResult);

      return newArr;
    });
  };
  const getResult = () => {
    const newArr = arr.concat(display);
    clearState();
    setDisplay(doMath(newArr));
  };

  useEffect(() => {
    console.log('arr', arr);
    console.log('display', display);
    console.log('input', currentInput);
    console.log('operator', currentOperator);
  });

  return (
    <div className="calculator-wrapper">
      <div className="display-wrapper">
        <div className="display-small">{arr}</div>
        <div id="display" className="display-main">
          {display}
        </div>
      </div>
      <div className="buttons-wrapper">
        <Button id="clear" value="C" onClick={() => clearState()}></Button>
        <Button value="&#37;"></Button>
        <Button value="&#177;"></Button>
        <Button
          id="divide"
          value="&#247;"
          onClick={() => handleOperator('/')}
        ></Button>
        <Button id="seven" value="7" onClick={() => handleNum(7)}></Button>
        <Button id="eight" value="8" onClick={() => handleNum(8)}></Button>
        <Button id="nine" value="9" onClick={() => handleNum(9)}></Button>
        <Button
          id="multiply"
          value="&#215;"
          onClick={() => handleOperator('*')}
        ></Button>
        <Button id="four" value="4" onClick={() => handleNum(4)}></Button>
        <Button id="five" value="5" onClick={() => handleNum(5)}></Button>
        <Button id="six" value="6" onClick={() => handleNum(6)}></Button>
        <Button
          id="subtract"
          value="&#8722;"
          onClick={() => handleOperator('-')}
        ></Button>
        <Button id="one" value="1" onClick={() => handleNum(1)}></Button>
        <Button id="two" value="2" onClick={() => handleNum(2)}></Button>
        <Button id="three" value="3" onClick={() => handleNum(3)}></Button>
        <Button
          id="add"
          value="&#43;"
          onClick={() => handleOperator('+')}
        ></Button>
        <Button value="&#9003;"></Button>
        <Button id="zero" value="0" onClick={() => handleNum(0)}></Button>
        <Button id="decimal" value="."></Button>
        <Button id="equals" value="&#61;" onClick={() => getResult()}></Button>
      </div>
    </div>
  );
}

export default App;
