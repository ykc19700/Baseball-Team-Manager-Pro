export function analyzeMatchup(player = {}, opponent = {}) {
  return {
    player: player.name || '',
    advantage: (player.rating || 0) >= (opponent.strength || 0),
    recommendation: (player.rating || 0) >= (opponent.strength || 0)
      ? 'recommended'
      : 'consider alternative'
  };
}
