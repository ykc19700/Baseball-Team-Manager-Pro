import { APP_CONFIG } from './config.js';

export function saveData(data) {
  localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(data));
}

export function loadData() {
  const data = localStorage.getItem(APP_CONFIG.storageKey);
  return data ? JSON.parse(data) : {};
}
