export function createGamePlan(context = {}) {
  return {
    opponent: context.opponent || '',
    strategy: context.scoreDiff < 0 ? 'aggressive' : 'balanced',
    focus: context.inning > 7 ? 'late_game' : 'standard'
  };
}
