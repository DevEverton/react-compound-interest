import React from "react";

export default function Installment({ value, addedValue, percentage }) {
  return (
    <div>
      <div className="container">
        <span>{value}</span>
        <span>{addedValue}</span>
        <span>{percentage}</span>
      </div>
    </div>
  );
}
