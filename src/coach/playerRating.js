export function calculateRating(player = {}) {
  const batting = player.batting || 0;
  const defense = player.defense || 0;
  const speed = player.speed || 0;

  return Math.round((batting + defense + speed) / 3);
}

export function applyRating(player) {
  return {
    ...player,
    rating: calculateRating(player)
  };
}
