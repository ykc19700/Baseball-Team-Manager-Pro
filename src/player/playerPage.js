import { renderPlayerList } from './playerList.js';
import { renderPlayerForm } from './playerForm.js';
import { renderPlayerSearch } from './playerSearch.js';

export function renderPlayerPage(container) {
  container.innerHTML = `
    <section class="player-page">
      <header class="page-header">
        <h2>⚾ 球員管理</h2>
        <p>管理球員資料、傷兵、禁賽與守備位置。</p>
      </header>

      <div id="player-search"></div>

      <div class="player-layout">
        <div id="player-form" class="player-panel"></div>
        <div id="player-list" class="player-panel"></div>
      </div>
    </section>
  `;

  renderPlayerSearch(container.querySelector('#player-search'));
  renderPlayerForm(container.querySelector('#player-form'));
  renderPlayerList(container.querySelector('#player-list'));
}
