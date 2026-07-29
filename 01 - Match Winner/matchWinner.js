function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  }
}

console.log(matchWinner(2, 1)); //Team A Won
console.log(matchWinner(1, 3)); //Team B Won
console.log(matchWinner(2, 2)); //Draw
console.log(matchWinner("3", 2)); //Invalid
