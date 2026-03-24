const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('App root element was not found.');
}

root.innerHTML = `
  <section class="hero">
    <p class="eyebrow">MVP scaffold</p>
    <h1>Decentralized P2P Chat</h1>
    <p class="lead">
      Initial interface for the future Vue/Ionic application. This page documents the core product pillars
      and gives us a stable target for iterative development.
    </p>
  </section>
  <section class="grid">
    <article class="card">
      <h2>P2P rooms</h2>
      <p>Each community room is intended to become an independent, synchronisable chain of events.</p>
    </article>
    <article class="card">
      <h2>Time economy</h2>
      <p>Attention is treated as a scarce resource. Reading and publishing should have explicit costs.</p>
    </article>
    <article class="card">
      <h2>Local-first clients</h2>
      <p>The app will evolve toward resilient offline-first storage with later peer replication.</p>
    </article>
  </section>
`;
