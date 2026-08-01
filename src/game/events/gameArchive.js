const ARCHIVE_KEY = 'btm_game_archive';

export function archiveGame(game) {
  const games = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '[]');
  games.push(game);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(games));
  return game;
}

export function getArchivedGames() {
  return JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '[]');
}
