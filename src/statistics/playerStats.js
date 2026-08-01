export function createPlayerStats(playerId) {
  return {
    playerId,
    games: 0,
    atBats: 0,
    hits: 0,
    rbi: 0,
    runs: 0
  };
}

export function updatePlayerStats(stats, data = {}) {
  return {
    ...stats,
    ...data
  };
}
