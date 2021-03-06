import { useEffect, useState } from 'react';

const initArr = [],
  initDisplay = 0;

// Business logic
const doMath = (arr) => {
  // @NOTE: need to refactor eval()
  const MATH_OPERATION = eval(arr.join(''));
  // console.log('MATH:', MATH_OPERATION);
  return MATH_OPERATION;
};

// Implementation/framework logic
const useFunctionSets = () => {
  const [arr, setArr] = useState(initArr);
  const [display, setDisplay] = useState(initDisplay);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  // const [lastOperation, setLastOperation] = useState(null);
  const clearAllStates = () => {
    setArr(initArr);
    setDisplay(initDisplay);
    setCurrentNumber(null);
    setCurrentOperator(null);
    // setLastOperation(null);
    // console.clear();
  };
  const clearSomeStates = () => {
    setArr(initArr);
    setDisplay(initDisplay);
    setCurrentNumber(null);
    setCurrentOperator(null);
  };
  const eraseToLeft = () => {
    setDisplay((prevState) => {
      if (prevState !== 0) {
        return String(prevState).length > 1
          ? String(prevState).slice(0, -1)
          : 0;
      }
      return Number(prevState);
    });
  };
  const getResult = () => {
    clearSomeStates();
    // @NOTE: try to implement multiple [=] clicks
    // let newArr = [];
    // if (!lastOperation) {
    //   newArr = arr.concat(display);
    //   setLastOperation(newArr.slice(-2));
    //   // setArr(newArr);
    // } else {
    //   newArr = [display].concat(lastOperation);
    //   // setArr(newArr);
    // }
    if (!togglePatch) {
      const newArr = arr.concat(display);
      setDisplay(doMath(newArr));
    } else {
      // @PATCH: FCC test no.13 patch
      const patchedArr = getPatchedArr(arr.concat(display));
      setDisplay(doMath(patchedArr));
    }
  };
  const getPercentage = () => {
    setDisplay(display / 100);
  };
  const handleNum = (value) => {
    let num = null,
      symbol = null;
    Number.isInteger(value) ? (num = value) : (symbol = value);

    setDisplay((prevState) => {
      // handling positive/negative number
      if (symbol === '+-') {
        return prevState > 0 ? prevState * -1 : prevState;
      }
      // handling decimal separator
      if (symbol === '.') {
        return Number.isInteger(prevState) ? prevState + symbol : prevState;
      }
      // override zero number handling for decimal
      if (num === 0 && !Number.isInteger(prevState)) {
        return prevState + String(num);
      }
      // handling non-zeroes and zero number
      if (prevState !== 0 && currentNumber === null) {
        const numbers = prevState + String(num);
        return Number(numbers);
      }
      return num;
    });
    // reset currentNumber & currentOperator state
    setCurrentNumber(null);
    setCurrentOperator(null);
  };
  const handleOperator = (op) => {
    setCurrentNumber(display);
    setCurrentOperator(op);
    if (!togglePatch) {
      setArr((prevState) => {
        // if currentOperator present, replace it
        if (currentOperator) {
          const rmOperator = prevState.slice(0, -1);
          return rmOperator.concat(op);
        }
        const newArr = prevState.concat(display).concat(op);
        // @NOTE: need to refactor setState inside setState?
        const currentResult = doMath(newArr.slice(0, -1));
        setDisplay(currentResult);
        return newArr;
      });
    } else {
      // @PATCH: FCC test no.13 patch
      setArr((prevState) => {
        // if currentOperator present, IGNORE it
        if (currentOperator) {
          return prevState.concat(op);
        }
        const newArr = prevState.concat(display).concat(op);
        return newArr;
      });
    }
  };
  /**
   * @PATCH: FCC test no.13 patch
   *  If 2 or more operators are entered consecutively,
   * the operation performed should be the last operator entered
   * (excluding the negative (-) sign.
   */
  const [togglePatch, setTogglePatch] = useState(false);
  const getPatchedArr = (arr) => {
    let patchedArr = [];
    arr.forEach((e, i) => {
      if (!isNaN(e)) {
        patchedArr.push(e);
      }
      if (isNaN(e) && arr[i + 1] === '-' && !isNaN(arr[i + 2])) {
        patchedArr.push(e);
      }
      if (isNaN(e) && !isNaN(arr[i + 1])) {
        patchedArr.push(e);
      }
    });
    return patchedArr;
  };

  // useEffect(() => {
  //     console.log('arr', arr);
  //     console.log('display', display);
  //     console.log('input', currentNumber);
  //     console.log('operator', currentOperator);
  // });

  return {
    clearAllStates,
    eraseToLeft,
    handleNum,
    handleOperator,
    getPercentage,
    getResult,
    arr,
    display,
    // @PATCH: FCC test no.13 patch
    togglePatch,
    setTogglePatch,
  };
};

export default useFunctionSets;
