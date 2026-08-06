import { getPlayers } from './playerService.js';

export function renderPlayerList(container, players = null) {
  const list = players ?? getPlayers();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        尚無球員資料
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(player => `
    <div class="player-card">

      <div class="player-info">
        <strong>#${player.number} ${player.name}</strong>
        <div>${player.position}</div>
      </div>

      <div class="player-status">
        ${player.injured ? '<span class="badge injured">傷兵</span>' : ''}
        ${player.suspended ? '<span class="badge suspended">禁賽</span>' : ''}
      </div>

      <div class="player-actions">
        <button data-id="${player.id}" class="edit-player">
          編輯
        </button>

        <button data-id="${player.id}" class="delete-player">
          刪除
        </button>
      </div>

    </div>
  `).join('');
}
