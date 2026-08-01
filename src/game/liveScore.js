import { getGames } from './gameService.js';

export function renderLiveScore(container) {
  const games = getGames();
  const game = games.at(-1);

  container.innerHTML = game
    ? `<h3>${game.opponent}</h3><p>${game.score.us} : ${game.score.opponent}</p><p>${game.inning}局</p>`
    : '<p>尚未建立比賽</p>';
}
