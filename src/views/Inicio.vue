<!-- Inicio.vue -->
<template>
  <div class="cosmo-dashboard">
    <!-- Header -->
    <header class="dashboard-header">
      <div class="logo">BarraGuia</div>
      <nav class="main-nav">
        <ul>
          <li v-for="item in navItems" :key="item" :class="{ active: item === 'Inicio' }">
            {{ item }}
          </li>
        </ul>
      </nav>
      <div class="user-menu" @click.stop="toggleMenu">
        <div class="user-info">
          <span class="update-time">UPD: 45s ago</span>
          <img src="@/assets/usuario.webp" alt="User" class="avatar" />
        </div>
     
      </div>
    </header>

    <!-- Main Content -->
    <main class="dashboard-main">
      <div class="background-image"></div>

      <div class="expedition-title">
        <span class="expedition-badge"></span>
        <h1>KL ZONE / AREA 2</h1>
      </div>

      <div class="top-stats">
        <div class="stat-box wind">
          <div class="value">36 KM/H</div>
          <div class="label">Wind Speed</div>
        </div>
        <div class="stat-box temp">
          <div class="value">-81 °F</div>
          <div class="label">Day Temperature</div>
        </div>
      </div>

      <!-- Left Panel -->
      <div class="panel left-panel">
        <div class="panel-header">
          <h3>Solar Activity</h3>
          <span class="alert-icon">⚠️</span>
        </div>
        <div class="solar-gauge">
          <div class="gauge-circle">
            <span class="percentage">56%</span>
            <span class="label">flashes</span>
          </div>
          <div class="status high">High</div>
          <div class="radiation">+0.7 µSv</div>
        </div>
        <h4 class="section-title">3D Projection</h4>
        <div class="projection-graph">
          <div class="graph-item" v-for="material in materials" :key="material.name">
            <span>{{ material.name }}</span>
            <div class="wave" :style="{ '--wave-color': material.color }"></div>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="panel right-panel">
        <div class="view-tabs">
          <button class="tab active">Structure</button>
          <button class="tab">Composition</button>
        </div>
        <div class="graph-section">
          <h4 class="graph-title">Mineral Ratio</h4>
          <div class="gauge-meter">
            <div class="meter-fill" :style="{ width: '78%' }"></div>
            <span class="meter-value">78%</span>
          </div>
          <div class="legend">
            <span><span class="dot fe2o3"></span> Fe₂O₃</span>
            <span><span class="dot mgco3"></span> MgCO₃</span>
          </div>
        </div>
        <div class="stats-grid">
          <div class="stat-item radiation">
            <div class="value">0.7 µSv</div>
            <div class="label">Radiation</div>
          </div>
          <div class="stat-item purity">
            <div class="value">78 %</div>
            <div class="label">Purity</div>
          </div>
        </div>
        <button class="generate-report-btn">Generate Report</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data() {
    return {
      isOpen: false,
      navItems: ['Inicio', 'Mapas', 'Datos', 'Eventos', 'Noticias'],
      materials: [
        { name: 'Basalt', color: '#3b82f6' },
        { name: 'Sand', color: '#f59e0b' },
        { name: 'Uranium', color: '#10b981' },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.isOpen = false;
    });
  }
};
</script>
<style scoped>
.cosmo-dashboard {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  height: 100vh;
  position: relative;
}

/* Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.dashboard-header nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
}

.dashboard-header nav ul li {
  cursor: pointer;
  transition: color 0.2s;
  font-size: 0.9rem;
}

.dashboard-header nav ul li:hover {
  color: #a5b4fc;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.update-time {
  font-size: 0.7rem;
  color: #9ca3af;
}

.avatar {
  border-radius: 50%;
  border: 2px solid #60a5fa;
  width: 28px;
  height: 28px;
}



/* Main Content */
.dashboard-main {
  position: relative;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/inicio.webp') center/cover no-repeat;
  z-index: -1;
}


.expedition-title {
  text-align: center;
  position: absolute;
  top: 15%;
  z-index: 10;
  width: 100%;
  padding: 0 1rem;
}

.expedition-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.expedition-title h1 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Panels */
.panel {
  background: rgba(61, 61, 61, 0.85);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5),
              inset 0 0 10px rgba(82, 81, 81, 0.05);
  max-width: 300px;
  z-index: 5;
  width: 100%;
}

.left-panel {
  position: absolute;
  left: 5%;
  top: 30%;
}

.right-panel {
  position: absolute;
  right: 5%;
  top: 30%;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.panel-header h3 {
  margin: 0;
  font-size: 1rem;
}

.alert-icon {
  font-size: 1rem;
}

.solar-gauge {
  text-align: center;
  margin: 0.5rem 0;
}

.gauge-circle {
  width: 80px;
  height: 80px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  margin: 0 auto 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.gauge-circle::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, #f59e0b, #fbbf24);
  opacity: 0.3;
}

.percentage {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fbbf24;
}

.label {
  font-size: 0.7rem;
  color: #9ca3af;
}

.status {
  background: rgba(239, 68, 68, 0.2);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.7rem;
  margin-top: 0.3rem;
}

.radiation {
  font-size: 0.7rem;
  color: #3b82f6;
  margin-top: 0.3rem;
}

.section-title {
  font-size: 0.8rem;
  margin: 0.5rem 0 0.3rem;
  color: #9ca3af;
}

.projection-graph {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.graph-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
}

.graph-item span {
  flex-shrink: 0;
}

.wave {
  flex-grow: 1;
  height: 6px;
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  border-radius: 3px;
}

/* Right Panel */
.view-tabs {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.tab {
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  transition: all 0.2s;
}

.tab.active {
  background: #3b82f6;
  color: white;
}

.graph-section {
  margin: 0.5rem 0;
}

.graph-title {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: #9ca3af;
}

.gauge-meter {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: linear-gradient(to right, #e11d48, #f59e0b);
  position: absolute;
  left: 0;
  top: 0;
  transition: width 1s ease-out;
}

.meter-value {
  position: absolute;
  top: -15px;
  right: 0;
  font-size: 0.7rem;
  color: #fbbf24;
}

.legend {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.3rem;
  font-size: 0.7rem;
}

.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.stat-item {
  text-align: center;
}

.stat-item .value {
  font-size: 1rem;
  font-weight: bold;
}

.stat-item .label {
  font-size: 0.7rem;
  color: #9ca3af;
}

.generate-report-btn {
  width: 100%;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.generate-report-btn:hover {
  background: #3b82f6;
  color: white;
}

/* Top Stats */
.top-stats {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  min-width: 100px;
}

.stat-box .value {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}

.stat-box .label {
  font-size: 0.7rem;
  color: #9ca3af;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .dashboard-header {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .logo {
    font-size: 1rem;
  }

  .dashboard-header nav ul {
    gap: 0.5rem;
    font-size: 0.8rem;
  }

  .user-info {
    gap: 0.3rem;
  }

  .update-time {
    font-size: 0.6rem;
  }

  .avatar {
    width: 24px;
    height: 24px;
  }

  .dashboard-main {
    padding: 0.5rem;
    height: calc(100vh - 50px);
  }

  .expedition-title {
    top: 10%;
  }

  .expedition-title h1 {
    font-size: 1.5rem;
  }

  .expedition-badge {
    font-size: 0.6rem;
    padding: 0.15rem 0.3rem;
  }

  .left-panel, .right-panel {
    position: static;
    width: 100%;
    max-width: none;
    margin: 0.5rem 0;
    padding: 0.75rem;
  }

  .top-stats {
    top: 8%;
    gap: 0.3rem;
  }

  .stat-box {
    min-width: 80px;
    padding: 0.5rem;
  }

  .stat-box .value {
    font-size: 1rem;
  }

  .stat-box .label {
    font-size: 0.6rem;
  }

  .panel-header h3 {
    font-size: 0.9rem;
  }

  .gauge-circle {
    width: 60px;
    height: 60px;
  }

  .percentage {
    font-size: 1rem;
  }

  .label {
    font-size: 0.6rem;
  }

  .status {
    font-size: 0.6rem;
    padding: 0.1rem 0.2rem;
  }

  .radiation {
    font-size: 0.6rem;
  }

  .section-title {
    font-size: 0.7rem;
  }

  .graph-item {
    font-size: 0.6rem;
  }

  .wave {
    height: 4px;
  }

  .view-tabs {
    gap: 0.2rem;
  }

  .tab {
    padding: 0.2rem 0.4rem;
    font-size: 0.6rem;
  }

  .graph-title {
    font-size: 0.7rem;
  }

  .meter-value {
    font-size: 0.6rem;
    top: -12px;
  }

  .legend {
    font-size: 0.6rem;
    gap: 0.3rem;
  }

  .dot {
    width: 5px;
    height: 5px;
  }

  .stats-grid {
    gap: 0.3rem;
  }

  .stat-item .value {
    font-size: 0.9rem;
  }

  .stat-item .label {
    font-size: 0.6rem;
  }

  .generate-report-btn {
    padding: 0.4rem;
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .dashboard-header {
    padding: 0.5rem;
  }

  .logo {
    font-size: 0.9rem;
  }

  .dashboard-header nav ul {
    gap: 0.3rem;
    font-size: 0.7rem;
  }

  .user-info {
    gap: 0.2rem;
  }

  .update-time {
    font-size: 0.5rem;
  }

  .avatar {
    width: 20px;
    height: 20px;
  }

  .dashboard-main {
    padding: 0.3rem;
    height: calc(100vh - 40px);
  }

  .expedition-title {
    top: 5%;
  }

  .expedition-title h1 {
    font-size: 1.2rem;
  }

  .expedition-badge {
    font-size: 0.5rem;
    padding: 0.1rem 0.2rem;
  }

  .left-panel, .right-panel {
    margin: 0.3rem 0;
    padding: 0.5rem;
  }

  .top-stats {
    top: 5%;
    gap: 0.2rem;
  }

  .stat-box {
    min-width: 60px;
    padding: 0.3rem;
  }

  .stat-box .value {
    font-size: 0.9rem;
  }

  .stat-box .label {
    font-size: 0.5rem;
  }

  .panel-header h3 {
    font-size: 0.8rem;
  }

  .gauge-circle {
    width: 50px;
    height: 50px;
  }

  .percentage {
    font-size: 0.9rem;
  }

  .label {
    font-size: 0.5rem;
  }

  .status {
    font-size: 0.5rem;
    padding: 0.05rem 0.1rem;
  }

  .radiation {
    font-size: 0.5rem;
  }

  .section-title {
    font-size: 0.6rem;
  }

  .graph-item {
    font-size: 0.5rem;
  }

  .wave {
    height: 3px;
  }

  .view-tabs {
    gap: 0.1rem;
  }

  .tab {
    padding: 0.15rem 0.3rem;
    font-size: 0.5rem;
  }

  .graph-title {
    font-size: 0.6rem;
  }

  .meter-value {
    font-size: 0.5rem;
    top: -10px;
  }

  .legend {
    font-size: 0.5rem;
    gap: 0.2rem;
  }

  .dot {
    width: 4px;
    height: 4px;
  }

  .stats-grid {
    gap: 0.2rem;
  }

  .stat-item .value {
    font-size: 0.8rem;
  }

  .stat-item .label {
    font-size: 0.5rem;
  }

  .generate-report-btn {
    padding: 0.3rem;
    font-size: 0.6rem;
  }
}
</style>