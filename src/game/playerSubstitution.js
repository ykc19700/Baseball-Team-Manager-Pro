export function substitute(players, outId, inPlayer) {
  return players.map(player =>
    player.id === outId ? inPlayer : player
  );
}
