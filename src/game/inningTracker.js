export function nextInning(game) {
  return {
    ...game,
    inning: game.inning + 1
  };
}

export function setInning(game, inning) {
  return {
    ...game,
    inning
  };
}
