export function createBattingOrder(players = []) {
  return players.slice(0, 9).map((player, index) => ({
    order: index + 1,
    player
  }));
}
