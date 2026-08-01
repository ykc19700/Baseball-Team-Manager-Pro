export function optimizeBattingOrder(players = []) {
  return [...players]
    .filter(player => !player.injured && !player.suspended)
    .sort((a, b) => {
      const scoreA = (a.contact || 0) + (a.power || 0) + (a.speed || 0);
      const scoreB = (b.contact || 0) + (b.power || 0) + (b.speed || 0);
      return scoreB - scoreA;
    })
    .slice(0, 9);
}
