import React from "react";

interface Props {
  value: number;
  onInc: () => void;
  onDec: () => void;
  color?: "green" | "yellow";
}

export default function Counter({
  value,
  onInc,
  onDec,
  color = "yellow",
}: Props) {
  function handleInc() {
    onInc();
  }

  function handleDec() {
    onDec();
  }

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={handleInc}> + </button>
      <label>{value}</label>
      <button onClick={handleDec}> - </button>
    </div>
  );
}
