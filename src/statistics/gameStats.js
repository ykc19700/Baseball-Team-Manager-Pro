export function createGameStats(gameId) {
  return {
    gameId,
    teamScore: 0,
    opponentScore: 0,
    hits: 0,
    errors: 0
  };
}
