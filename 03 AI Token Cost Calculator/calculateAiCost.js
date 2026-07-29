function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  const rateForHundredToken = 5;
  let totalTokenCost = 0;

  if (tokensUsed <= 500) {
    totalTokenCost = 0;
  } else if (tokensUsed > 500) {
    let removeFreeToken = tokensUsed - 500;
    totalTokenCost = Math.floor(removeFreeToken / 100) * rateForHundredToken;
  }
  return totalTokenCost;
}

console.log(calculateAiCost(300)); // 0
console.log(calculateAiCost(500)); // 0
console.log(calculateAiCost(650)); // 5
console.log(calculateAiCost(1000)); // 25
console.log(calculateAiCost(-10)); //Invalid
console.log(calculateAiCost("500")); // Invalid
