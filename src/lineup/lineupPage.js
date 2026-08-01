import { renderLineupForm } from './lineupForm.js';
import { renderLineupCard } from './lineupCard.js';

export function renderLineupPage(container) {
  container.innerHTML = `
    <section class="lineup-page">
      <h2>⚾ 先發 Order</h2>
      <div id="lineup-form"></div>
      <div id="lineup-card"></div>
    </section>
  `;

  renderLineupForm(container.querySelector('#lineup-form'));
  renderLineupCard(container.querySelector('#lineup-card'));
}
