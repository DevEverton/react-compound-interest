import React, { useState } from "react";
import Input from "./components/Input";
import css from "./styles/styles.module.css";

export default function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState("");

  const handleInputChange = (newValue, id) => {
    switch (id) {
      case "IV":
        setCurrentValue(newValue);
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
      <h2 className={css.header}>React - Juros Compostos</h2>
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <Input
              id={"IV"}
              label={"Montante Inicial:"}
              value={currentValue}
              min={0}
              max={100000}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="col l4 s12">
            <Input
              id={"IR"}
              label={"Taxa de juros mensal:"}
              value={interestRate}
              min={-12}
              max={12}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="col l4 s12">
            <Input
              id={"P"}
              label={"Período (meses):"}
              value={period}
              min={1}
              max={36}
              onInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
