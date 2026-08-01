const events = {};

export function on(name, callback) {
  events[name] ??= [];
  events[name].push(callback);
}

export function emit(name, data) {
  (events[name] || []).forEach(callback => callback(data));
}
