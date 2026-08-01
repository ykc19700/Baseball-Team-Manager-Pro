export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('PWA Service Worker registered'))
      .catch(error => console.error(error));
  }
}
