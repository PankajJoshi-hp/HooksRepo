import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    default: {
      return "Unrecognnized  command";
    }
  }
};
const initialState = { count: 0 };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleIncreament() {
    dispatch({ type: "increament" });
  }
  function handleDecreament() {
    dispatch({ type: "decreament" });
  }
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncreament}>Increase Value</button>
      <button onClick={handleDecreament}>Decrease Value</button>
    </>
  );
};

export default App;
