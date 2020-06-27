import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import css from "./styles/styles.module.css";
import Installment from "./components/Installment";
import { calculateValues } from "./helpers/Calculation.js";

export default function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [interest, setInterest] = useState("");
  const [period, setPeriod] = useState("");
  const [installmentsData, setInstallmentsData] = useState({});
  const [installmentsElements, setInstallmentsElements] = useState([]);

  useEffect(() => {
    let internalCurrentValue =
      currentValue === "" ? 0 : parseFloat(currentValue);
    let internalInterest = interest === "" ? 0 : parseFloat(interest);
    let internalPeriod = period === "" ? 0 : parseFloat(period);

    const calculatedValues = calculateValues(
      internalCurrentValue,
      internalInterest,
      internalPeriod
    );
    setInstallmentsData(calculatedValues);
  }, [currentValue, interest, period]);

  useEffect(() => {
    const getInstallmentsElements = () => {
      if (installmentsData === {}) {
        return;
      }
      let elements = [];

      for (let i = 1; i <= period; i++) {
        elements.push(
          <div key={i} className="col l3 s6">
            <Installment
              id={i}
              value={installmentsData[i][0]}
              addedValue={installmentsData[i][1]}
              percentage={installmentsData[i][2]}
            />
          </div>
        );
      }
      return elements;
    };

    setInstallmentsElements(getInstallmentsElements());
  }, [installmentsData]); // eslint-disable-line react-hooks/exhaustive-deps

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
  };

  return (
    <div>
      <h2 style={{ fontWeight: "200" }} className={css.header}>
        React - Juros Compostos
      </h2>
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
              min={0}
              max={36}
              onInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{installmentsElements}</div>
      </div>
    </div>
  );
}
