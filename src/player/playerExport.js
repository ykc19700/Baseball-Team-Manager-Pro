import { getPlayers } from './playerService.js';

export function exportPlayersJSON() {
  return JSON.stringify(getPlayers(), null, 2);
}
