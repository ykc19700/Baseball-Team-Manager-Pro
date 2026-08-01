export function createGameRecord(data = {}) {
  return {
    id: crypto.randomUUID(),
    date: data.date || new Date().toISOString(),
    opponent: data.opponent || '',
    score: data.score || { home: 0, away: 0 },
    lineup: data.lineup || [],
    events: data.events || []
  };
}
