export function createEvent(data = {}) {
  return {
    id: crypto.randomUUID(),
    gameId: data.gameId,
    inning: data.inning || 1,
    type: data.type || 'unknown',
    playerId: data.playerId || null,
    detail: data.detail || '',
    createdAt: new Date().toISOString()
  };
}
