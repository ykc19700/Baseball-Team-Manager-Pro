import { savePlayers } from './playerService.js';

export function importPlayers(json) {
  const players = JSON.parse(json);
  savePlayers(players);
  return players;
}
