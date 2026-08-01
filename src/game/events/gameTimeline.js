export function createTimeline(events = []) {
  return events
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .map(event => ({
      inning: event.inning,
      detail: event.detail,
      time: event.createdAt
    }));
}
