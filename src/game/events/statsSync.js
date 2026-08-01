export function syncEventToStats(event, stats = {}) {
  const updated = { ...stats };

  if (event.type === 'hit') {
    updated.hits = (updated.hits || 0) + 1;
  }

  if (event.type === 'strikeout') {
    updated.strikeouts = (updated.strikeouts || 0) + 1;
  }

  if (event.type === 'rbi') {
    updated.rbi = (updated.rbi || 0) + 1;
  }

  return updated;
}
