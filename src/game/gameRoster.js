export function lockRoster(lineup) {
  return {
    locked: true,
    lineup,
    createdAt: new Date().toISOString()
  };
}
