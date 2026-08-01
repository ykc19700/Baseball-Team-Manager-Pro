export function createPitchingStats(playerId) {
  return {
    playerId,
    innings: 0,
    pitches: 0,
    strikeouts: 0,
    walks: 0,
    earnedRuns: 0
  };
}
