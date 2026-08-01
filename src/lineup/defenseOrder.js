export const DEFENSE_POSITIONS = [
  'P','C','1B','2B','3B','SS','LF','CF','RF'
];

export function assignDefense(players) {
  return DEFENSE_POSITIONS.map((position, index) => ({
    position,
    player: players[index] || null
  }));
}
