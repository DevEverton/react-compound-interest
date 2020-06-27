import React from "react";

export default function Installment({ id, value, addedValue, percentage }) {
  return (
    <div>
      <div className="container" style={{ backgroundColor: "red" }}>
        <span>{id}</span>
        <p>{value}</p>
        <p>{addedValue}</p>
        <p>{percentage}</p>
      </div>
    </div>
  );
}
