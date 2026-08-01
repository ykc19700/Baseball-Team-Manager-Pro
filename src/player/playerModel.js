export function createPlayer(data = {}) {
  return {
    id: crypto.randomUUID(),
    number: data.number || '',
    name: data.name || '',
    position: data.position || 'P',
    injured: false,
    suspended: false,
    note: ''
  };
}
