export function calculateSeasonRecord(games = []) {
  return games.reduce((result, game) => {
    result.games++;
    if ((game.score.home || 0) > (game.score.away || 0)) result.wins++;
    else if ((game.score.home || 0) < (game.score.away || 0)) result.losses++;
    else result.ties++;
    return result;
  }, { games: 0, wins: 0, losses: 0, ties: 0 });
}
