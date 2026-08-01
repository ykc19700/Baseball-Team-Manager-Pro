export function validateLineup(players) {
  if (players.length !== 9) return false;

  const ids = players.map(player => player?.id).filter(Boolean);
  return ids.length === new Set(ids).size;
}

export function canSelectPlayer(player) {
  return player && !player.injured && !player.suspended;
}
