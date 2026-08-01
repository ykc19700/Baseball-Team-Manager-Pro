export function createPlayerEvent(playerId, action, detail = '') {
  return {
    playerId,
    action,
    detail,
    createdAt: new Date().toISOString()
  };
}
