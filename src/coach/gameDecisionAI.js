export function analyzeGameSituation(game = {}) {
  return {
    recommend: game.scoreDiff < 0 ? 'increase offense' : 'maintain strategy',
    inning: game.inning || 1,
    scoreDiff: game.scoreDiff || 0
  };
}
