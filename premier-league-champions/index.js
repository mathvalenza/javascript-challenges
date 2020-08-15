function calculatePerformance(team) {
  return {
    ...team,
    points: 3 * team.wins + team.draws,
    goalsDifference: team.scored - team.conceded
  };
}

function getPositions(t1, t2) {
  if (t1.points > t2.points) return -1;

  if (t1.points === t2.points && t1.goalsDifference > t2.points) return -1;

  return 1;
}

function champions(teams) {
  return teams.map(calculatePerformance).sort(getPositions).shift().name;
}

console.log(
  champions([
    {
      name: 'Manchester United',
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20
    },
    {
      name: 'Arsenal',
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 98,
      conceded: 29
    },
    {
      name: 'Chelsea',
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29
    }
  ])
);

module.exports = champions;
