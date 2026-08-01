export function analyzeRisk(game = {}) {
  return {
    scoreRisk: Math.abs(game.scoreDiff || 0),
    pitcherRisk: (game.pitchCount || 0) >= 100,
    lateInning: (game.inning || 1) >= 7
  };
}
