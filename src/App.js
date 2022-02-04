import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const initialArr = [],
    initialDisplay = '0';
  const [arr, setArr] = useState(initialArr);
  const [display, setDisplay] = useState(initialDisplay);
  const clearState = () => {
    setDisplay(initialDisplay);
    setArr(initialArr);
  };
  const handleNum = (num) => {
    setDisplay((prevState) => {
      if (prevState !== initialDisplay) {
        const numbers = prevState + String(num);
        return numbers;
      }
      return String(num);
    });
  };
  const handleOperator = (operator) => {
    setArr((prevState) => {
      return prevState.concat(display).concat(operator);
    });
    setDisplay(initialDisplay);
  };

  useEffect(() => {
    console.log('arr', arr);
    console.log('display', display);
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
        <Button id="equals" value="&#61;"></Button>
      </div>
    </div>
  );
}

export default App;
