'use client';

import { useState } from 'react';

export default function HazardViusalizationPage() {
  const [search, setSearch] = useState('');

  return (
    <main className="hazard-map-main">
      <div className="hazard-map-topbar">
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

      <div className="hazard-map-area">
        <div className="hazard-map-circle" />
        <img
          src="/sampleimg.png"
          alt="Sample Map"
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
      </div>

      <div className="hazard-map-controls">
        <div className="hazard-filters">
          <button className="hazard-btn active">
            <span className="hazard-icon"></span> Flood
          </button>
          <button className="hazard-btn">Landslide</button>
          <button className="hazard-btn">
            <span className="hazard-icon">🏠</span> Earthquake
          </button>
        </div>

        <div className="map-controls">
          <button className="map-btn" id="maponly-btn" title="My Location">📍</button>
          <div className="zoom-controls">
            <button className="map-btn" title="Zoom In">+</button>
            <button className="map-btn" title="Zoom Out">−</button>
          </div>
        </div>
      </div>

      <div className="hazard-legend-vertical">
        <div className="legend-row">
          <span className="legend-box low" />
          <span className="legend-label">Low</span>
        </div>
        <div className="legend-row">
          <span className="legend-box med" />
          <span className="legend-label">Med</span>
        </div>
        <div className="legend-row">
          <span className="legend-box high" />
          <span className="legend-label">High</span>
        </div>
      </div>

      <div className="timeline-bar">
        <div className="timeline-gradient" />
        <div className="timeline-track">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-label">1980</span>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-label">2004</span>
          </div>
          <div className="timeline-item active">
            <div className="timeline-dot active" />
            <span className="timeline-label active">2000</span>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-label">2016</span>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-label">2020</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hazard-map-main {
          position: relative;
          height: 89vh;
          width: 100%;
          overflow: hidden;
        }

        .hazard-map-area {
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
          pointer-events: none;
        }

        .hazard-map-circle {
          width: 400px;
          height: 400px;
          background: #b92727;
          opacity: 0.25;
          border-radius: 50%;
          z-index: 10;
          position: absolute;
        }

        .hazard-map-topbar {
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
          color: #b92727;
          cursor: pointer;
          margin-left: 0.3rem;
        }

        .hazard-map-controls {
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          color: #222;
        }

        .hazard-btn.active {
          background: #6ec6f7;
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
          padding: 0.5rem;
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
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

        .hazard-legend-vertical {
          position: fixed;
          top: 23rem;
          left: 32px;
          z-index: 25;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.2rem;
          background: rgba(255,255,255,0.85);
          border-radius: 0.7rem;
          padding: 0.5rem 0.8rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          font-size: 1.1rem;
          font-weight: 500;
          color: #222;
        }
        .legend-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .legend-box {
          width: 32px;
          height: 28px;
          border-radius: 0.3rem;
          display: inline-block;
        }
        .legend-label {
          font-size: 1rem;
        }
        .legend-box.low { background: #2ee94d; }
        .legend-box.med { background: #ffe94d; }
        .legend-box.high { background: #f44336; }

        .timeline-bar {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100vw;
          height: 80px;
          z-index: 30;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
        }
        .timeline-gradient {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100vw;
          height: 80px;
          background: linear-gradient(to top, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0.0) 100%);
          z-index: 1;
          pointer-events: none;
        }
        .timeline-track {
          position: relative;
          z-index: 2;
          width: 80vw;
          max-width: 800px;
          height: 60px;
          margin: 0 auto 10px auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          pointer-events: auto;
        }
        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          flex: 1;
        }
        .timeline-dot {
          width: 22px;
          height: 22px;
          background: #222;
          border-radius: 50%;
          margin-bottom: 6px;
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transition: background 0.2s;
        }
        .timeline-dot.active {
          background: #b92727;
          border: 3px solid #fff;
        }
        .timeline-label {
          font-size: 1.1rem;
          color: #222;
          font-weight: 500;
          margin-top: 2px;
          transition: color 0.2s;
        }
        .timeline-label.active {
          color: #b92727;
          font-weight: bold;
          font-size: 1.15rem;
        }
        .timeline-track::before {
          content: '';
          position: absolute;
          top: 11px;
          left: 0;
          right: 0;
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
          z-index: 0;
        }

        @media (max-width: 600px) {
          .hazard-map-area {
            width: 100vw;
            height: 100vh;
          }
          .hazard-map-circle {
            width: 200px;
            height: 200px;
          }
          .location-search {
            width: 150px;
          }
          .hazard-legend-vertical {
            top: 80px;
            left: 8px;
            padding: 0.5rem 0.6rem;
            font-size: 0.95rem;
          }
          .legend-box {
            width: 20px;
            height: 16px;
          }
        }
      `}</style>
    </main>
  );
}