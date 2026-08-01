import { getLineups } from '../lineup/lineupService.js';

export function getGameLineup() {
  const lineups = getLineups();
  return lineups.at(-1) || null;
}
