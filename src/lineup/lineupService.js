import { loadData, saveData } from '../core/storage.js';

const KEY = 'lineups';

export function getLineups() {
  const data = loadData();
  return data[KEY] || [];
}

export function saveLineups(lineups) {
  const data = loadData();
  data[KEY] = lineups;
  saveData(data);
}
