export function suggestSubstitution(currentPlayer, bench = []) {
  if (!bench.length) return null;

  return [...bench]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];
}
