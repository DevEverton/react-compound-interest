import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import css from "./styles/styles.module.css";
import Installment from "./components/Installment";
import { calculateValues } from "./helpers/Calculation.js";

export default function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [interest, setInterest] = useState("");
  const [period, setPeriod] = useState("");
  const [installments, setInstallments] = useState({});

  useEffect(() => {
    let internalCurrentValue =
      currentValue === "" ? 1000 : parseFloat(currentValue);
    let internalInterest = interest === "" ? 0.5 : parseFloat(interest);
    let internalPeriod = period === "" ? 1 : parseFloat(period);

    const calculatedValues = calculateValues(
      internalCurrentValue,
      internalInterest,
      internalPeriod
    );
    setInstallments(calculatedValues);
  }, [currentValue, interest, period]);

  const handleInputChange = (newValue, id) => {
    switch (id) {
      case "IV":
        setCurrentValue(newValue);
        break;
      case "IR":
        setInterest(newValue);

        break;
      case "P":
        setPeriod(newValue);

        break;
      default:
        break;
    }
    console.log(installments);
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
              value={interest}
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
      {/* <Installment value={} addedValue={} percentage={} /> */}
    </div>
  );
}
