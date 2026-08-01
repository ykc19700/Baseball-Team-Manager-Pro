import { createLineup } from './lineupModel.js';
import { getLineups, saveLineups } from './lineupService.js';
import { validateLineup } from './lineupValidator.js';

export function saveLineup(starters) {
  if (!validateLineup(starters)) return false;

  const lineups = getLineups();
  lineups.push({ ...createLineup(), starters });
  saveLineups(lineups);

  return true;
}
