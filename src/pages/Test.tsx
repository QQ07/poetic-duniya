import { useState } from "react";

export function Test() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
    setCount(count + 2);
    console.log(count);
  };
  return (
    <>
      <button onClick={handleClick}>Increase</button>
      <h2>{count}</h2>
    </>
  );
}
