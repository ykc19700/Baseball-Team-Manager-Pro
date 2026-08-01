import { getPlayers } from './playerService.js';

export function searchPlayers(keyword = '') {
  return getPlayers().filter(player =>
    player.name.includes(keyword) || player.number.includes(keyword)
  );
}
