export function setSuspension(player, status = true) {
  return { ...player, suspended: status };
}

export function canPlay(player) {
  return !player.injured && !player.suspended;
}
