function calculateValues(initial, interest, period) {
  let result = {};
  let currentValue = initial;
  let currentPercentage = 0;
  let addedAmount = 0;
  let sign = interest > 0 ? "+" : "";

  const calculate = (initial, interest) => initial * (1 + interest / 100);
  const calculatePercentage = (initial, added) => (added * 100) / initial;

  for (let i = 1; i <= period; i++) {
    addedAmount += calculate(currentValue, interest) - currentValue;
    currentValue = calculate(currentValue, interest);
    currentPercentage = calculatePercentage(initial, addedAmount);

    result[i] = [
      localCurrency(currentValue),
      `${sign}${localCurrency(addedAmount)}`,
      `${currentPercentage.toFixed(2)}%`,
    ];
  }

  return result;
}

function localCurrency(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
// console.log(calculateValues(5900, 0.8, 12));
export { calculateValues };
