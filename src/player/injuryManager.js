export function setInjury(player, status = true) {
  return { ...player, injured: status };
}

export function canJoinLineup(player) {
  return !player.injured && !player.suspended;
}
