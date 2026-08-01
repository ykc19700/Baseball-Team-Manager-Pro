import { renderGameForm } from './gameForm.js';
import { renderLiveScore } from './liveScore.js';

export function renderGamePage(container) {
  container.innerHTML = `
    <section class="game-page">
      <h2>⚾ Game Day</h2>
      <div id="game-form"></div>
      <div id="live-score"></div>
    </section>
  `;

  renderGameForm(container.querySelector('#game-form'));
  renderLiveScore(container.querySelector('#live-score'));
}
