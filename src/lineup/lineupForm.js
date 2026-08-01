import { getPlayers } from '../player/playerService.js';
import { saveLineup } from './lineupManager.js';
import { getAvailablePlayers } from './availablePlayers.js';

export function renderLineupForm(container) {
  const players = getAvailablePlayers(getPlayers());

  container.innerHTML = `
    <p>可用球員：${players.length} 人</p>
    <button id="autoOrderBtn">AI 建立先發</button>
  `;

  container.querySelector('#autoOrderBtn').onclick = () => {
    saveLineup(players.slice(0, 9));
  };
}
