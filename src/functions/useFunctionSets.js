import { useEffect, useState } from 'react';

const initArr = [],
  initDisplay = 0;

const doMath = (arr) => {
  // @NOTE: need to refactor eval()
  const MATH_OPERATION = eval(arr.join(''));
  // console.log('MATH:', MATH_OPERATION);
  return MATH_OPERATION;
};

const useFunctionSets = () => {
  const [arr, setArr] = useState(initArr);
  const [display, setDisplay] = useState(initDisplay);
  const [currentInput, setCurrentInput] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  const clearState = () => {
    setArr(initArr);
    setDisplay(initDisplay);
    setCurrentInput(null);
    setCurrentOperator(null);
    // console.clear();
  };
  const eraseToLeft = () => {
    setDisplay((prevState) => {
      if (prevState !== 0) {
        if (prevState[prevState.length - 1] !== '.') {
          return String(prevState).slice(0, -1);
        }
        return Number(prevState);
      }
      return Number(prevState);
    });
  };
  const handleNum = (value) => {
    let num = null,
      symbol = null;
    Number.isInteger(value) ? (num = value) : (symbol = value);

    setDisplay((prevState) => {
      // handling positive/negative number
      if (symbol === '+-') {
        if (prevState > 0) {
          return prevState * -1;
        }
        return Math.abs(prevState);
      }
      // handling decimal separator
      if (symbol === '.') {
        if (Number.isInteger(prevState)) {
          return prevState + symbol;
        }
        return prevState;
      }
      // override zero number handling for decimal
      if (num === 0 && !Number.isInteger(prevState)) {
        return prevState + String(num);
      }
      // handling zero and non-zero number
      if (prevState !== 0 && currentInput === null) {
        const numbers = prevState + String(num);
        return Number(numbers);
      }
      return num;
    });
    // reset current input & operator state
    setCurrentInput(null);
    setCurrentOperator(null);
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
    // move to handleOperator ?
    // implement multiple [=] clicks
    setDisplay(doMath(newArr));
  };

  //   useEffect(() => {
  //     console.log('arr', arr);
  //     console.log('display', display);
  //     console.log('input', currentInput);
  //     console.log('operator', currentOperator);
  //   });

  return {
    clearState,
    eraseToLeft,
    handleNum,
    handleOperator,
    getResult,
    arr,
    display,
  };
};

export default useFunctionSets;
