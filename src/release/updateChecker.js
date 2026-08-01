import { APP_VERSION } from './version.js';

export function checkVersion(currentVersion) {
  return {
    current: APP_VERSION.version,
    latest: currentVersion || APP_VERSION.version,
    updateAvailable: currentVersion && currentVersion !== APP_VERSION.version
  };
}
