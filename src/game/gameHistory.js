export function createGameRecord(game) {
  return {
    ...game,
    finishedAt: new Date().toISOString()
  };
}
