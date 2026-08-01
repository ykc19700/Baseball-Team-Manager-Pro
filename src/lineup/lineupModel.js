export function createLineup() {
  return {
    id: crypto.randomUUID(),
    starters: Array(9).fill(null),
    dh: null,
    createdAt: new Date().toISOString()
  };
}
