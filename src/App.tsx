import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>カウンター</p>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};
