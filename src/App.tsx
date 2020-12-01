import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Counter
        onInc={() => setValue(value + 1)}
        onDec={() => setValue(value - 1)}
        value={value}
      />
    </div>
  );
}

export default App;
