const routes = {};

export function registerRoute(name, handler) {
  routes[name] = handler;
}

export function navigate(name, container) {
  if (routes[name]) {
    routes[name](container);
  }
}
