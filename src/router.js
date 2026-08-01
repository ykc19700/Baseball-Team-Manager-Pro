const routes = {};

export function registerRoute(name, handler) {
  routes[name] = handler;
}

export function navigate(name, container) {
  const page = routes[name];
  if (page) page(container);
}
