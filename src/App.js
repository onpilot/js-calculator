import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const initialState = '0';
  const [list, setList] = useState(initialState);
  const clearState = () => setList(initialState);
  const handleClick = (currentValue) => {
    setList((prevState) => {
      if (prevState !== '0') {
        return prevState + String(currentValue);
      }
      return currentValue;
    });
  };

  return (
    <div className="calculator-wrapper">
      <div className="display-wrapper">
        <div className="display-small">{}</div>
        <div id="display" className="display-main">
          {list}
        </div>
      </div>
      <div className="buttons-wrapper">
        <Button id="clear" value="C" onClick={() => clearState()}></Button>
        <Button value="&#37;"></Button>
        <Button value="&#177;"></Button>
        <Button id="divide" value="&#247;"></Button>
        <Button id="seven" value="7" onClick={() => handleClick(7)}></Button>
        <Button id="eight" value="8" onClick={() => handleClick(8)}></Button>
        <Button id="nine" value="9" onClick={() => handleClick(9)}></Button>
        <Button id="multiply" value="&#215;"></Button>
        <Button id="four" value="4" onClick={() => handleClick(4)}></Button>
        <Button id="five" value="5" onClick={() => handleClick(5)}></Button>
        <Button id="six" value="6" onClick={() => handleClick(6)}></Button>
        <Button id="subtract" value="&#8722;"></Button>
        <Button id="one" value="1" onClick={() => handleClick(1)}></Button>
        <Button id="two" value="2" onClick={() => handleClick(2)}></Button>
        <Button id="three" value="3" onClick={() => handleClick(3)}></Button>
        <Button id="add" value="&#43;"></Button>
        <Button value="<"></Button>
        <Button id="zero" value="0" onClick={() => handleClick(0)}></Button>
        <Button id="decimal" value="."></Button>
        <Button id="equals" value="&#61;"></Button>
      </div>
    </div>
  );
}

export default App;
