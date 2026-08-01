import { loadData, saveData } from '../core/storage.js';

const KEY = 'players';

export function getPlayers() {
  const data = loadData();
  return data[KEY] || [];
}

export function savePlayers(players) {
  const data = loadData();
  data[KEY] = players;
  saveData(data);
}
