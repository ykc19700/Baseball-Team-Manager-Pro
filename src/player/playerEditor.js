import { getPlayers, savePlayers } from './playerService.js';

export function updatePlayer(id, changes) {
  const players = getPlayers();
  const index = players.findIndex(player => player.id === id);

  if (index === -1) return players;

  players[index] = { ...players[index], ...changes };
  savePlayers(players);

  return players[index];
}
