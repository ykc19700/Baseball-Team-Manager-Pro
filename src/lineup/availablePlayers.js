export function getAvailablePlayers(players) {
  return players.filter(player =>
    !player.injured && !player.suspended
  );
}
