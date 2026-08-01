export function createInningEvent(inning, detail = '') {
  return {
    inning,
    detail,
    timestamp: new Date().toISOString()
  };
}
