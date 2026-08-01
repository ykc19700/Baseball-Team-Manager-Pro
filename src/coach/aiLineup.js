export function suggestLineup(players = []) {
  return [...players]
    .filter(player => !player.injured && !player.suspended)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 9);
}
