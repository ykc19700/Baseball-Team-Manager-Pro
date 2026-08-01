let deferredPrompt;

export function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
  });
}

export async function installApp() {
  if (!deferredPrompt) return false;
  deferredPrompt.prompt();
  deferredPrompt = null;
  return true;
}
