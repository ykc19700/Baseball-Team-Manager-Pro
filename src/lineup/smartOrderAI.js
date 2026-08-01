export function generateSmartOrder(players = []) {
  const available = players.filter(player => !player.injured && !player.suspended);

  return available.slice(0, 9).map((player, index) => ({
    order: index + 1,
    player
  }));
}
