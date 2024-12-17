import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hey this is ${user}`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
};
const Component2 = () => {
  return (
    <>
      <h2>Hey this is user 2</h2>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h3>hey this is user 3</h3>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h4>{`Hey this is ${user} again`}</h4>
    </>
  );
};

export default App;
