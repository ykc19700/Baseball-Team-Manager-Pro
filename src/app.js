import { renderHeader } from './components/header.js';
import { renderSidebar } from './components/sidebar.js';

export function startApp() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    <div class="app-layout">
      <header id="header"></header>
      <aside id="sidebar"></aside>
      <main class="content">
        <h1>⚾ Baseball Team Manager Pro</h1>
        <p>V5.2 Ultimate Coach Edition</p>
      </main>
    </div>
  `;

  renderHeader(document.querySelector('#header'));
  renderSidebar(document.querySelector('#sidebar'));
}
