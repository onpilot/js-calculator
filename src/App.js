import './App.css';

function App() {
  return (
    <div className="calculator-wrapper">
      <div className="display-wrapper">
        <div className="display-small"></div>
        <div className="display-main"></div>
      </div>
      <div className="buttons-wrapper">
        <input type="button" value="c" className="button" />
        <input type="button" value="%" className="button" />
        <input type="button" value="&#177;" className="button" />
        <input type="button" value="&#247;" className="button" />
        <input type="button" value="7" className="button" />
        <input type="button" value="8" className="button" />
        <input type="button" value="9" className="button" />
        <input type="button" value="&#215;" className="button" />
        <input type="button" value="4" className="button" />
        <input type="button" value="5" className="button" />
        <input type="button" value="6" className="button" />
        <input type="button" value="&#8722;" className="button" />
        <input type="button" value="1" className="button" />
        <input type="button" value="2" className="button" />
        <input type="button" value="3" className="button" />
        <input type="button" value="&#43;" className="button" />
        <input type="button" value="<" className="button" />
        <input type="button" value="0" className="button" />
        <input type="button" value="." className="button" />
        <input type="button" value="&#61;" className="button" />
      </div>
    </div>
  );
}

export default App;
