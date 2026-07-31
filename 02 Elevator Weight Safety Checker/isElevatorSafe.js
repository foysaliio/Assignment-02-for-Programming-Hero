function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let total = 0;
  for (const weight of weights) {
    if (typeof weight !== "number") {
      return "Invalid";
    }
    total += weight;
  }

  if (total <= 400) {
    return true;
  } else {
    return false;
  }
}

console.log(isElevatorSafe([60, 75, 50])); // true;
console.log(isElevatorSafe([90, 100, 95, 120])); // false;
console.log(isElevatorSafe([400])); // true;
console.log(isElevatorSafe("60,75,50")); // Invalid;
