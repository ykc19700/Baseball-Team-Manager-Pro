export function createPlayerCard(player) {
  const status = player.injured
    ? '傷兵'
    : player.suspended
      ? '禁賽'
      : '可出賽';

  return `
    <div class="player-card">
      <h3>#${player.number} ${player.name}</h3>
      <p>位置：${player.position}</p>
      <p>狀態：${status}</p>
    </div>
  `;
}
