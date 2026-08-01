import { addGame } from './gameManager.js';

export function renderGameForm(container) {
  container.innerHTML = `
    <input id="opponent" placeholder="對手">
    <button id="createGameBtn">建立比賽</button>
  `;

  container.querySelector('#createGameBtn').onclick = () => {
    addGame({
      opponent: document.querySelector('#opponent').value
    });
  };
}
