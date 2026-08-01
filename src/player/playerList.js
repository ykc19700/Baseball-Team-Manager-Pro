import { getPlayers } from './playerService.js';

export function renderPlayerList(container) {
  const players = getPlayers();

  container.innerHTML = players.length
    ? players.map(player => `
      <div class="player-card">
        <strong>#${player.number} ${player.name}</strong>
        <span>${player.position}</span>
      </div>
    `).join('')
    : '<p>尚無球員資料</p>';
}
