export function calculateBattingAverage(stats) {
  if (!stats.atBats) return 0;
  return Number((stats.hits / stats.atBats).toFixed(3));
}

export function addBattingResult(stats, result) {
  return {
    ...stats,
    atBats: stats.atBats + 1,
    hits: stats.hits + (result === 'hit' ? 1 : 0)
  };
}
