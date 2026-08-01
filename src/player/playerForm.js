import { addPlayer } from './playerManager.js';

export function renderPlayerForm(container) {
  container.innerHTML = `
    <input id="playerNumber" placeholder="背號">
    <input id="playerName" placeholder="姓名">
    <button id="addPlayerBtn">新增球員</button>
  `;

  container.querySelector('#addPlayerBtn').onclick = () => {
    addPlayer({
      number: document.querySelector('#playerNumber').value,
      name: document.querySelector('#playerName').value
    });
  };
}
