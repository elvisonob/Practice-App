import React, { useReducer } from 'react';

const reducerFn = (prevState, action) => {
  if ({ type: 'ADD_NUMBER' }) {
    return { count: action.payload };
  }
  if ({ type: 'REDUCE_NUMBER' }) {
    const newCount = prevState.count > 0 ? action.payload : 0;
    return { count: newCount };
  }

  return prevState;
};

const App = () => {
  const [state, dispatchFn] = useReducer(reducerFn, { count: 0 });

  const additionHandler = () => {
    dispatchFn({ type: 'ADD_NUMBER', payload: state.count + 1 });
  };

  const reducerHandler = () => {
    if (state.count > 0) {
      dispatchFn({ type: 'REDUCE_NUMBER', payload: state.count - 1 });
    }
  };
  return (
    <div>
      <h1>Counter App</h1>
      <div onClick={additionHandler}>+</div>
      <div>{state.count}</div>
      <div onClick={reducerHandler}>-</div>
    </div>
  );
};

export default App;
