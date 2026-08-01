export function generateBoxScore(events = []) {
  return {
    atBats: events.filter(e => e.type === 'atBat').length,
    hits: events.filter(e => e.type === 'hit').length,
    runs: events.filter(e => e.type === 'run').length,
    strikeouts: events.filter(e => e.type === 'strikeout').length
  };
}
