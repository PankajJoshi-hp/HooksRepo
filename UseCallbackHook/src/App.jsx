import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import ChildComp from "./components/ChildComp";

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h1>Count is: {count}</h1>
      <ChildComp onClick={updateCount} />
    </>
  );
};

export default App;
