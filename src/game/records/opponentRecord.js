export function analyzeOpponent(games = [], opponent = '') {
  const records = games.filter(game => game.opponent === opponent);

  return {
    opponent,
    games: records.length,
    wins: records.filter(game => game.result === 'W').length,
    losses: records.filter(game => game.result === 'L').length
  };
}
