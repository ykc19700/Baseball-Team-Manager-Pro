export function evaluatePitcher(pitcher = {}) {
  return {
    stamina: pitcher.stamina || 0,
    pitchCount: pitcher.pitchCount || 0,
    recommendChange: (pitcher.pitchCount || 0) >= 100
  };
}
