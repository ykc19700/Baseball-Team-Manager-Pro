import { getPlayers, savePlayers } from './playerService.js';

export function updatePlayer(id, changes) {
  const players = getPlayers();

  const index = players.findIndex(player => player.id === id);

  if (index === -1) {
    return null;
  }

  const updatedPlayer = {
    ...players[index],
    ...changes,
    updatedAt: new Date().toISOString()
  };

  players[index] = updatedPlayer;

  savePlayers(players);

  return updatedPlayer;
}

export function findPlayer(id) {
  return getPlayers().find(player => player.id === id) || null;
}
