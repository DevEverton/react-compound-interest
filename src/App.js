import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

export default function App() {
  const [initialValue, setInitialValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState("");

  const handleInputChange = (newValue, id) => {
    switch (id) {
      case "IV":
        setInitialValue(newValue);
        break;
      case "IR":
        setInterestRate(newValue);
        break;
      case "P":
        setPeriod(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>React Juros Compostos</h2>
      <Input
        id={"IV"}
        label={"Montante Inicial:"}
        value={initialValue}
        min={0}
        max={9 ** 99}
        onInputChange={handleInputChange}
      />
      <Input
        id={"IR"}
        label={"Taxa de juros mensal:"}
        value={interestRate}
        min={-12}
        max={12}
        onInputChange={handleInputChange}
      />
      <Input
        id={"P"}
        label={"Período (meses):"}
        value={period}
        min={1}
        max={200}
        onInputChange={handleInputChange}
      />
    </div>
  );
}
