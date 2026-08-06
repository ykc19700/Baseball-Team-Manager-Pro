import { getPlayers } from './playerService.js';

export function searchPlayers(keyword = '') {
  const text = keyword.trim().toLowerCase();

  return getPlayers().filter(player =>
    player.name.toLowerCase().includes(text) ||
    String(player.number).includes(text)
  );
}

export function renderPlayerSearch(container) {
  container.innerHTML = `
    <div class="player-search">
      <input
        id="player-search-input"
        type="text"
        placeholder="搜尋背號或姓名..."
      />
    </div>
  `;

  const input = container.querySelector('#player-search-input');

  input.addEventListener('input', (event) => {
    const keyword = event.target.value;
    const result = searchPlayers(keyword);

    console.log('Search Result:', result);

    // 下一個 Sprint 改成：
    // renderPlayerList(result)
  });
}
