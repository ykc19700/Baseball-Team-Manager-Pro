import { createGame } from './gameModel.js';
import { getGames, saveGames } from './gameService.js';

export function addGame(data) {
  const games = getGames();
  const game = createGame(data);
  games.push(game);
  saveGames(games);
  return game;
}
