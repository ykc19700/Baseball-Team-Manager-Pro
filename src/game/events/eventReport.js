export function generateEventReport(events = []) {
  return {
    title: 'Game Event Report',
    totalEvents: events.length,
    events,
    createdAt: new Date().toISOString()
  };
}
