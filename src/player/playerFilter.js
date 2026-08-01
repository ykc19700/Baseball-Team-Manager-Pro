import { getPlayers } from './playerService.js';

export function filterAvailablePlayers() {
  return getPlayers().filter(player => !player.injured && !player.suspended);
}

export function filterByPosition(position) {
  return getPlayers().filter(player => player.position === position);
}
