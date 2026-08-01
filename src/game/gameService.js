import { loadData, saveData } from '../core/storage.js';

const KEY = 'games';

export function getGames() {
  return loadData()[KEY] || [];
}

export function saveGames(games) {
  const data = loadData();
  data[KEY] = games;
  saveData(data);
}
