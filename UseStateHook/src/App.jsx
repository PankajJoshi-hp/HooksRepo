import React, { useState } from "react";

const cars = {
  name: "Defender",
  brand: "Land Rover",
  year: "2000",
  color: "black",
};

const App = () => {
  const [color, setColor] = useState("");
  const [counter, setCounter] = useState(0);
  const [car, setCar] = useState(cars);

  const updateCar = () => {
    setCar((prevName) => {
      return { ...prevName, name: "Range Rover" };
    });
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  // const handleSetcolor = () => {
  //   setColor("pink");
  // };

  return (
    <>
      <h1>We all love {color}! color</h1>
      {/* <button type="button" onClick={handleSetcolor}>
        Red
      </button> */}
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>

      <button type="button" onClick={handleCounter}>
        Counter is: {counter}
      </button>
      <br />
      <br />
      <br />

      <button type="button" onClick={updateCar}>
        Update car name
      </button>
      <h1>The car is {car.name}.</h1>
      <p>
        It's a {car.brand}'s car of year {car.year}, and in {car.color} color.
      </p>
    </>
  );
};

export default App;
