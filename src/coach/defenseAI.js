export function suggestDefense(players = []) {
  const positions = ['P','C','1B','2B','3B','SS','LF','CF','RF'];

  return players.slice(0, 9).map((player, index) => ({
    player,
    position: player.position || positions[index]
  }));
}
