import { renderPlayerPage } from '../player/playerPage.js';
import { renderLineupPage } from '../lineup/lineupPage.js';

export function renderDashboard(container) {
  container.innerHTML = `
    <section class="dashboard">
      <h2>⚾ 球隊儀表板</h2>
      <button id="playersBtn">球員管理</button>
      <button id="lineupBtn">先發 Order</button>
      <div id="dashboard-content"></div>
    </section>
  `;

  const content = container.querySelector('#dashboard-content');

  container.querySelector('#playersBtn').onclick = () => {
    renderPlayerPage(content);
  };

  container.querySelector('#lineupBtn').onclick = () => {
    renderLineupPage(content);
  };
}
