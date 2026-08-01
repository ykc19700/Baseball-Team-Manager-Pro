const KEY = 'btm_game_events';

export function saveEvent(event) {
  const events = JSON.parse(localStorage.getItem(KEY) || '[]');
  events.push(event);
  localStorage.setItem(KEY, JSON.stringify(events));
  return event;
}

export function getEvents(gameId) {
  const events = JSON.parse(localStorage.getItem(KEY) || '[]');
  return events.filter(event => event.gameId === gameId);
}
