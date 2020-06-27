import React, { useEffect, useState } from "react";
import css from "../styles/styles.module.css";

export default function Installment({ id, value, addedValue, percentage }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    const colors = {
      negative: {
        value: "#eb7077",
        percentage: "tomato",
      },
      positive: {
        value: "#25a69a",
        percentage: "#37A0D0",
      },
    };
    console.log(typeof parseFloat(percentage));
  }, []);
  return (
    <div className={css.installmentContainer}>
      <span className={css.installmentIndex}>{id}</span>

      <div className={css.installmentValues}>
        <span>{value}</span>
        <span>{addedValue}</span>
        <span>{percentage}</span>
      </div>
    </div>
  );
}
