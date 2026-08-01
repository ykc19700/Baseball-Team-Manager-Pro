import { registerServiceWorker } from './pwa/registerSW.js';
import { setupInstallPrompt } from './pwa/installPrompt.js';

export function initializeApp() {
  registerServiceWorker();
  setupInstallPrompt();
}
