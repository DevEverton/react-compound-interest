import React, { useEffect, useState } from "react";
import css from "../styles/styles.module.css";

export default function Installment({ id, value, addedValue, percentage }) {
  const [colors, setColors] = useState({});

  useEffect(() => {
    const colorPicker = {
      negative: {
        value: "#eb7077",
        percentage: "tomato",
      },
      positive: {
        value: "#25a69a",
        percentage: "#37A0D0",
      },
    };
    if (parseFloat(percentage) < 0) {
      setColors(colorPicker.negative);
    } else {
      setColors(colorPicker.positive);
    }
  }, [percentage]);

  return (
    <div className={css.installmentContainer}>
      <span
        style={{ backgroundColor: `${colors.value}` }}
        className={css.installmentIndex}
      >
        {id}
      </span>

      <div className={css.installmentValues}>
        <span style={{ color: `${colors.value}` }}>{value}</span>
        <span style={{ color: `${colors.value}` }}>{addedValue}</span>
        <span style={{ color: `${colors.percentage}` }}>{percentage}</span>
      </div>
    </div>
  );
}
