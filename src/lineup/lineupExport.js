import { getLineups } from './lineupService.js';

export function exportLineupJSON() {
  return JSON.stringify(getLineups(), null, 2);
}
