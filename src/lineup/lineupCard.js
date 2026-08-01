import { getLineups } from './lineupService.js';

export function renderLineupCard(container) {
  const lineups = getLineups();
  const lineup = lineups.at(-1);

  container.innerHTML = lineup
    ? lineup.starters.map((player, index) =>
        `<div>${index + 1}棒 - ${player.name}</div>`
      ).join('')
    : '<p>尚未建立先發</p>';
}
