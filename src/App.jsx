import "./App.css";
import ResultContainer from "./components/ResultContainer";
import ButtonsContainer from "./components/ButtonsContainer";
import Button from "./components/Button";

import { useReducer } from "react"

const initValue = {
  number: '',
  operator: '',
  expression: '0',
};

function resultStateReducer(state, action) {
  const lastExpression = state.expression.charAt(state.expression.length - 1);

  switch (action.type) {
    case "number" :
      if(state.expression === '0') {
        return {...state, number: state.number + action.payload, expression: action.payload};
      } else {
        return {...state, number: state.number + action.payload, expression: state.expression + action.payload};
      };

    case 'operator' : 

      if(isNaN(Number(lastExpression))) { // 표현식이 연산자로 끝날 때
        return {...state, operator: action.payload, expression: state.expression.slice(0, -1) + action.payload};
      } else {
        return {...state, operator: action.payload, expression: state.expression + action.payload};
      }
    
    case 'point' :
      const expression_number_array = state.expression.split(/[\*\+\-\%\/]/); // 표현식을 연산자 기준으로 배열로 만듦
      if(
        expression_number_array[expression_number_array.length - 1].includes('.') ||
        isNaN(Number(lastExpression))
      ) 
      {
        return {...state}
      } else {
        return {...state, expression: state.expression + '.'}
      }

    case 'result' : 
      try {
        return {...state, expression: `${eval(state.expression)}`}
      } catch(error) {
        return {...state, expression: state.expression};
      }

    case 'delete' :
      if(state.expression.length === 1) {
        return {...state, expression: '0'}
      } else {
        const deleted_expression = state.expression.slice(0, -1);
        return {...state, expression: deleted_expression}
      }

    case 'init' : 
      return {...initValue};
  };
};

function App() {
  const [resultState, resultDispatch] = useReducer(resultStateReducer,initValue);

  function numberClick(e) {
    const number = e.target.value;
    resultDispatch({
      type: 'number',
      payload: number
    })
  };

  function operatorClick(e) {
    const operator = e.target.value;
    resultDispatch({
      type: 'operator',
      payload: operator,
    })
  }

  function pointClick() {
    resultDispatch({
      type: 'point',
    })
  }

  function deleteClick() {
    resultDispatch({
      type: 'delete',
    })
  }

  function initClick() {
    resultDispatch({
      type: 'init',
    })
  }

  function resultClick() {
    resultDispatch({
      type: 'result',
    })
  }

  return (
    <div className="w-[20rem] mx-auto mt-3">
      <header className="mb-3">
        <h1>계산기</h1>
      </header>
      <main>
        <ResultContainer result={resultState} />
        <ButtonsContainer>
          <Button handleClick={initClick}>AC</Button>
          <Button handleClick={deleteClick}>DEL</Button>
          <Button handleClick={operatorClick} value="%">%</Button>

          <Button handleClick={operatorClick} value="/">/</Button>
          <Button handleClick={numberClick} value="7">7</Button>
          <Button handleClick={numberClick} value="8">8</Button>
          <Button handleClick={numberClick} value="9">9</Button>

          <Button handleClick={operatorClick} value="*">X</Button>
          <Button handleClick={numberClick} value="4">4</Button>
          <Button handleClick={numberClick} value="5">5</Button>
          <Button handleClick={numberClick} value="6">6</Button>

          <Button handleClick={operatorClick} value="-">-</Button>
          <Button handleClick={numberClick} value="1">1</Button>
          <Button handleClick={numberClick} value="2">2</Button>
          <Button handleClick={numberClick} value="3">3</Button>

          <Button handleClick={operatorClick} value="+" styleType="row-2">+</Button>
          <Button handleClick={numberClick} value="0">0</Button>
          <Button handleClick={pointClick}>.</Button>
          <Button handleClick={resultClick} value="=">=</Button>
        </ButtonsContainer>
      </main>
    </div>
  );
}

export default App;
