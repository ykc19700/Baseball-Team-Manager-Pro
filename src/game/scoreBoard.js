export function updateScore(game, us, opponent) {
  return {
    ...game,
    score: {
      us,
      opponent
    }
  };
}
