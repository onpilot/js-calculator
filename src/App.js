import useFunctionSets from './functions/useFunctionSets';
import { Button } from './components/Button.styled';
import './root.css';
import './App.css';

function App() {
  const {
    clearAllStates,
    eraseToLeft,
    handleNum,
    handleOperator,
    getPercentage,
    getResult,
    arr,
    display,
  } = useFunctionSets();

  return (
    <div className="calculator-wrapper">
      <div className="display-wrapper">
        <div className="display-title">Standard</div>
        <div className="display-small">{arr}</div>
        <div id="display" className="display-main">
          {display}
        </div>
      </div>
      <div className="buttons-wrapper">
        <Button id="clear" value="C" onClick={() => clearAllStates()}></Button>
        <Button value="&#37;" onClick={() => getPercentage()}></Button>
        <Button value="&#177;" onClick={() => handleNum('+-')}></Button>
        <Button
          id="divide"
          value="&#247;"
          onClick={() => handleOperator('/')}
          primary
        ></Button>
        <Button id="seven" value="7" onClick={() => handleNum(7)}></Button>
        <Button id="eight" value="8" onClick={() => handleNum(8)}></Button>
        <Button id="nine" value="9" onClick={() => handleNum(9)}></Button>
        <Button
          id="multiply"
          value="&#215;"
          onClick={() => handleOperator('*')}
          primary
        ></Button>
        <Button id="four" value="4" onClick={() => handleNum(4)}></Button>
        <Button id="five" value="5" onClick={() => handleNum(5)}></Button>
        <Button id="six" value="6" onClick={() => handleNum(6)}></Button>
        <Button
          id="subtract"
          value="&#8722;"
          onClick={() => handleOperator('-')}
          primary
        ></Button>
        <Button id="one" value="1" onClick={() => handleNum(1)}></Button>
        <Button id="two" value="2" onClick={() => handleNum(2)}></Button>
        <Button id="three" value="3" onClick={() => handleNum(3)}></Button>
        <Button
          id="add"
          value="&#43;"
          onClick={() => handleOperator('+')}
          primary
        ></Button>
        <Button value="&#8592;" onClick={() => eraseToLeft()}></Button>
        <Button id="zero" value="0" onClick={() => handleNum(0)}></Button>
        <Button id="decimal" value="." onClick={() => handleNum('.')}></Button>
        <Button
          id="equals"
          value="&#61;"
          onClick={() => getResult()}
          secondary
        ></Button>
      </div>
    </div>
  );
}

export default App;
