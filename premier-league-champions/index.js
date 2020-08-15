function calculatePerformance(team) {
  return {
    ...team,
    points: 3 * team.wins + team.draws,
    goalsDifference: team.scored - team.conceded
  };
}

function getPositions(t1, t2) {
  if (t1.points > t2.points) return -1;

  if (t1.points === t2.points && t1.goalsDifference > t2.goalsDifference)
    return -1;

  return 1;
}

function champions(teams) {
  return teams.map(calculatePerformance).sort(getPositions).shift().name;
}

module.exports = champions;
