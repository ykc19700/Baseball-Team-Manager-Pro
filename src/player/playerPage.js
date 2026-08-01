import { renderPlayerList } from './playerList.js';
import { renderPlayerForm } from './playerForm.js';

export function renderPlayerPage(container) {
  container.innerHTML = `
    <section class="player-page">
      <h2>⚾ 球員管理</h2>
      <div id="player-form"></div>
      <div id="player-list"></div>
    </section>
  `;

  renderPlayerForm(container.querySelector('#player-form'));
  renderPlayerList(container.querySelector('#player-list'));
}
