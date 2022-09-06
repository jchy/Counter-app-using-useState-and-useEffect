import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [oddEven, setOddEven] = useState("");

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (counter % 2 === 0) {
      setOddEven("Even");
    } else {
      setOddEven("Odd");
    }
  }, [counter]);

  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>
        {counter}-{oddEven}
      </h2>
      <button onClick={handleIncrementCounter}>+</button>
      <button onClick={handleDecrementCounter}>-</button>
    </div>
  );
}
