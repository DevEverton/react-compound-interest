function calculateValue(initial, interest, period) {
  let result = initial * (1 + interest / 100) ** period;
  return localCurrency(result);
}

function localCurrency(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
console.log(calculateValue(5900, 0.8, 12));

// function calculatePercentage() {}
