export function runHealthCheck() {
  return {
    storage: typeof localStorage !== 'undefined',
    serviceWorker: 'serviceWorker' in navigator,
    online: navigator.onLine,
    timestamp: new Date().toISOString()
  };
}
