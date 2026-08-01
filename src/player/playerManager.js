import { createPlayer } from './playerModel.js';
import { getPlayers, savePlayers } from './playerService.js';

export function addPlayer(data) {
  const players = getPlayers();
  players.push(createPlayer(data));
  savePlayers(players);
  return players;
}

export function removePlayer(id) {
  const players = getPlayers().filter(player => player.id !== id);
  savePlayers(players);
  return players;
}
