export function renderRecordDashboard(container, records = {}) {
  container.innerHTML = `
    <section class="record-dashboard">
      <h2>⚾ 戰績中心</h2>
      <p>比賽數：${records.games || 0}</p>
      <p>勝：${records.wins || 0}</p>
      <p>敗：${records.losses || 0}</p>
    </section>
  `;
}
