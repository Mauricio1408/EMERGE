'use client';

import { useState } from 'react';

export default function RiskMapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <main className="risk-map-main">
      <div className="risk-map-topbar">
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span />
          <span />
          <span />
        </button>
        <div className="search-container">
          <input
            className="location-search"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search location..."
          />
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <aside className="risk-map-sidebar">
          <div className="sidebar-columns">
            <div className="sidebar-column left-column">
              <div className="sidebar-section" id="risk-score-section">
                <div className="sidebar-value" id="risk-score-value">87</div>
                <div className="sidebar-label" id="risk-score-label">Risk Score</div>
              </div>
              <div className="sidebar-section" id="population-section">
                <div className="sidebar-value" id="population-value">12,300</div>
                <div className="sidebar-label" id="population-label">Estimated Population</div>
              </div>
              <div className="sidebar-section" id="evacuation-section">
                <div className="sidebar-value" id="evacuation-value">Jaro National High School (800m)</div>
                <div className="sidebar-label" id="evacuation-label">Nearby Evacuation Center</div>
              </div>
            </div>

            <div className="sidebar-column right-column">
              <div className="sidebar-section" id="primary-hazard-section">
                <div className="sidebar-value" id="primary-hazard-value">FLOOD</div>
                <div className="sidebar-label" id="primary-hazard-label">Primary Hazard</div>
              </div>
              <div className="sidebar-section" id="resources-section">
                <div className="sidebar-value" id="resources-value">
                  2 ambulances,<br />3 rescue boats
                </div>
                <div className="sidebar-label" id="resources-label">Pre-positioned resources</div>
                <button className="allocation-btn" id="allocation-btn" onClick={() => (window.location.href = '/responder-allocation')}>View Resource Allocation</button>
              </div>
            </div>
          </div>
        </aside>
      )}

      <div className="risk-map-area">
        <div className="risk-map-circle" />
        <img src="/sampleimg.png" alt="Sample Map" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </div>

      <div className="risk-map-controls">
        <div className="hazard-filters">
          <button className="hazard-btn active">
            <span className="hazard-icon"></span> Flood
          </button>
          <button className="hazard-btn">
            Landslide
          </button>
          <button className="hazard-btn">
            <span className="hazard-icon"></span> Earthquake
          </button>
        </div>

        <div className="map-controls">
          <button className="map-btn" id='maponly-btn' title="My Location">📍</button>
          <div className="zoom-controls">
            <button className="map-btn" title="Zoom In">+</button>
            <button className="map-btn" title="Zoom Out">−</button>
          </div>
        </div>

        <div className="risk-legend">
          <span className="legend-box low" /> Low
          <span className="legend-box med" /> Med
          <span className="legend-box high" /> High
        </div>
      </div>

      <style jsx>{`
        .risk-map-main {
          position: relative;
          height: 89vh;
          width: 100%;
          overflow: hidden;
        }

        .risk-map-area {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
          pointer-events: none;
        }

        .risk-map-circle {
          width: 400px;
          height: 400px;
          background: #B92727;
          opacity: 0.25;
          border-radius: 50%;
          z-index: 10;
          position: absolute;
        }

        .risk-map-topbar {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          padding: 1rem;
          gap: 0.5rem;
          width: 380px;
          background: transparent;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .hamburger {
          width: 40px;
          height: 40px;
          background: #fff;
          border: none;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #000;
          border-radius: 2px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 2rem;
          padding: 0.3rem 0.5rem;
        }

        .location-search {
          border: none;
          outline: none;
          color: #000000 !important;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 2rem;
          width: 250px;
          height: 20px;
        }

        .search-btn {
          background: transparent;
          border: none;
          font-size: 1.2rem;
          color: #B92727;
          cursor: pointer;
          margin-left: 0.3rem;
        }

        .risk-map-sidebar {
          position: fixed;
          top: 130px;
          left: 0;
          height: calc(100vh - 64px);
          width: 380px;
          background: rgba(255, 211, 211, 0.21);
          // border-radius: 0 1rem 1rem 0;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.08);
          padding: 1rem;
          z-index: 15;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .sidebar-columns {
          display: flex;
          gap: 1rem;
          height: 100%;
        }

        .sidebar-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .left-column #risk-score-section {
          background: #f8d7da;
          height: 100px;
          color: #721c24;
        }
        
        #risk-score-value {
          font-size: 2.2rem;
          font-weight: bold;
        }

        .left-column #population-section {
          background: #d4edda;
          height: 100px;
          color: #155724;
        }

        #population-value {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .left-column #evacuation-section {
          background: #e2e3e5;
          color: #383d41;
        }

        .right-column #primary-hazard-section {
          background: #fff3cd;
          color: #856404;
        }

        #primary-hazard-value {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .right-column #resources-section {
          background: #cce5ff;
          color: #004085;
          display: flex;
          height: 120px;
          flex-direction: column;
          gap: 0.5rem;
        }

        .sidebar-section {
          border-radius: 1rem;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .sidebar-value {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: center;
        }

        .sidebar-label {
          font-size: 0.7rem;
          opacity: 0.85;
          text-align: center;
        }

        .allocation-btn {
          background: #B92727;
          color: #fff;
          border: none;
          border-radius: 0.7rem;
          padding: 0.4rem 0.2rem;
          margin-top: 2rem;
          font-size: 0.7rem;
          font-weight: 400;
          cursor: pointer;
          align-self: flex-start;
          width: 150px;
        }

        .allocation-btn:hover {
            background-color: #dde1e4;
            color: #b92727;
        }

        .risk-map-controls {
          position: absolute;
          top: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2rem;
          z-index: 20;
        }

        .hazard-filters {
          display: flex;
          gap: 1rem;
        }

        .hazard-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f5f5f5;
          border: none;
          border-radius: 2rem;
          padding: 0.2rem 1.2rem;
          margin-top: -1rem;
          font-size: 1rem;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          color: #222;
        }

        .hazard-btn.active {
          background: #6EC6F7;
          color: #222;
        }

        .hazard-icon {
          font-size: 1.2rem;
        }

        .map-controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
        }

        .map-btn {
          background: #fff;
          padding: rem;
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          width: 38px;
          height: 38px;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.4rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        #maponly-btn {
          margin-top: 15rem;
        }

        .zoom-controls {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          color: #000000;
        }

        .risk-legend {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-top: -1rem;
          margin-right: 4rem;
          color: #fff;
          shadow: 2 2px 8px rgba(255, 255, 255, 0.2);
        }

        .legend-box {
          display: inline-block;
          width: 32px;
          height: 28px;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }

        .legend-box.low { background: #2ee94d; }
        .legend-box.med { background: #ffe94d; }
        .legend-box.high { background: #f44336; }

        @media (max-width: 600px) {
          .risk-map-sidebar {
            width: 95vw;
            border-radius: 0 0 1rem 1rem;
          }
          .risk-map-area {
            width: 100vw;
            height: 100vh;
          }
          .risk-map-circle {
            width: 200px;
            height: 200px;
          }
          .location-search {
            width: 150px;
          }
          .sidebar-columns {
            flex-direction: column;
          }
      `}</style>
    </main>
  );
}