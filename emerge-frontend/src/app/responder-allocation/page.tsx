'use client';

import { useState, useEffect } from 'react';

type ClusterPoint = { x: number; y: number };
type Cluster = { center: ClusterPoint; points: ClusterPoint[] };

export default function ResponderAllocationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch clusters from backend
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/cluster?n_responders=10')
      .then(res => res.json())
      .then(data => {
        setClusters(data.clusters || []);
        setLoading(false);
      });
  }, []);

  // Derived values from clusters
  const totalResponders = clusters.length;
  const affectedAreas = clusters.reduce((sum, c) => sum + c.points.length, 0);
  const urgentZones = clusters.filter(c => c.points.length > 5).length; // Example: clusters with >5 points are "urgent"

  // Popup data based on clusters
  const popupData = clusters.map((cluster, idx) => ({
    zone: `Cluster #${idx + 1}`,
    urgency: cluster.points.length > 5 ? 'High' : cluster.points.length > 2 ? 'Medium' : 'Low',
    population: cluster.points.length * 200, // Example: 200 people per point
    eta: `${15 + idx * 5} mins`, // Example ETA
    needed: `${cluster.points.length * 2} responders`, // Example: 2 responders per point
  }));

  return (
    <main className="relative h-[89vh] w-full overflow-hidden">
      <div className="relative z-20 flex items-center p-4 gap-2 w-[380px] bg-transparent rounded-b-lg">
        <button className="w-10 h-10 bg-white border-none rounded-lg flex flex-col justify-center items-center gap-1.5 cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span className="block w-6 h-0.5 bg-black rounded" />
          <span className="block w-6 h-0.5 bg-black rounded" />
          <span className="block w-6 h-0.5 bg-black rounded" />
        </button>
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1">
          <input
            className="border-none outline-none text-black px-4 py-2 text-base rounded-full w-[250px] h-5"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search location..."
          />
          <button className="bg-transparent border-none text-[#B92727] text-xl cursor-pointer ml-1" aria-label="Search">
            🔍
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <aside className="fixed top-[130px] left-0 h-[calc(100vh-64px)] w-[380px] bg-[rgba(255,211,211,0.21)] shadow-lg p-4 z-15 overflow-y-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-md w-full">
            <div className="col-span-2 flex bg-gray-500 rounded-2xl px-6 py-4 items-center justify-between text-white">
              <div className="flex flex-col items-center flex-1">
                <span className="text-4xl font-bold">{totalResponders}</span>
                <span className="text-[0.8600rem] items-center">Available Responders</span>
              </div>
              <div className="w-px h-12 bg-gray-300 mx-4" />
              <div className="flex flex-col items-center flex-1">
                <span className="text-4xl font-bold">{Math.floor(totalResponders * 0.6)}</span>
                <span className="text-[0.8400rem]">Deployed Responders</span>
              </div>
            </div>

            <div className="bg-gray-500 rounded-2xl flex flex-col items-center justify-center px-5 py-1 text-white w-[170px] h-[160px]">
              <span className="text-5xl font-bold">{totalResponders}</span>
              <span className="text-[0.9000rem] mt-3">Total Responders</span>
            </div>

            <div className="bg-gray-500 rounded-2xl flex flex-col items-center justify-center px-5 py-1 text-white w-[170px] h-[160px]">
              <span className="text-4xl font-bold">{20 + totalResponders} mins</span>
              <span className="text-[0.9000rem] mt-3">Time since recent deployment</span>
            </div>

            <div className="bg-gray-500 rounded-2xl flex flex-col items-center justify-center px-6 py-6 text-white text-center h-[200px]">
              <span className="text-lg font-semibold">{affectedAreas} Affected<br />Areas</span>
              <hr className="w-16 border-t border-gray-300 my-2" />
              <span className="text-lg font-semibold">{urgentZones} Urgent<br />Zones</span>
              <button
                className="mt-4 bg-red-600 text-white text-[0.7000rem] font-semibold rounded-lg px-4 py-2 transition-colors w-[100px] h-[40px] hover:text-[#b92727] hover:bg-[#faf5f5]"
                onClick={() => setShowPopup(true)}
                disabled={clusters.length === 0}
              >
                Develop plan
              </button>
            </div>
          </div>
        </aside>
      )}

      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] bg-white flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#B92727] opacity-25 rounded-full z-10 absolute sm:w-[200px] sm:h-[200px]" />
        {/* You can visualize clusters on a map here if you wish */}
        <img src="/sampleimg.png" alt="Sample Map" className="w-screen h-screen object-cover" />
      </div>

      <div className="absolute top-8 right-8 flex flex-col items-end gap-8 z-20">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-gray-100 border-none rounded-full px-5 py-1 mt-[-16px] text-base font-medium shadow-md cursor-pointer transition-colors text-[#222] focus:outline-none active:bg-[#6ec6f7] [&.active]:bg-[#6ec6f7] [&.active]:text-[#222] active">
            <span className="text-xl"></span> Flood
          </button>
          <button className="flex items-center gap-2 bg-gray-100 border-none rounded-full px-5 py-1 mt-[-16px] text-base font-medium shadow-md cursor-pointer transition-colors text-[#222] focus:outline-none">Landslide</button>
          <button className="flex items-center gap-2 bg-gray-100 border-none rounded-full px-5 py-1 mt-[-16px] text-base font-medium shadow-md cursor-pointer transition-colors text-[#222] focus:outline-none">
            <span className="text-xl"></span> Earthquake
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="bg-white p-2 border-none rounded-2xl shadow-md w-10 h-10 text-xl flex items-center justify-center mt-70 mb-2 cursor-pointer transition-colors" id="maponly-btn" title="My Location">📍</button>
          <div className="flex flex-col gap-1 text-black">
            <button className="bg-white p-2 border-none rounded-2xl shadow-md w-10 h-10 text-xl flex items-center justify-center cursor-pointer transition-colors" title="Zoom In">+</button>
            <button className="bg-white p-2 border-none rounded-2xl shadow-md w-10 h-10 text-xl flex items-center justify-center cursor-pointer transition-colors" title="Zoom Out">−</button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-[-16px] mr-16 text-white drop-shadow">
          <span className="inline-block w-8 h-7 rounded bg-[#2ee94d] mr-1" /> Low
          <span className="inline-block w-8 h-7 rounded bg-[#ffe94d] mr-1" /> Med
          <span className="inline-block w-8 h-7 rounded bg-[#f44336] mr-1" /> High
        </div>
      </div>

      {showPopup && clusters.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative bg-white rounded-2xl shadow-xl px-8 py-6 min-w-[340px] max-w-[90vw] text-black">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center justify-center mb-2">
              <span className="text-xl font-bold mr-2">Cluster</span>
              <span className="bg-gray-300 text-black font-bold px-2 py-1 rounded text-lg">{popupIndex + 1} / {clusters.length}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">Zone:</span> {popupData[popupIndex]?.zone}
            </div>
            <div className="mb-2">
              <span className="font-bold">Urgency:</span> {popupData[popupIndex]?.urgency}
            </div>
            <div className="mb-2">
              <span className="font-bold">Population Affected:</span> {popupData[popupIndex]?.population}
            </div>
            <div className="mb-2">
              <span className="font-bold">ETA:</span> {popupData[popupIndex]?.eta}
            </div>
            <div className="mb-4">
              <span className="font-bold">Needed:</span> {popupData[popupIndex]?.needed}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="text-3xl text-gray-500 hover:text-black px-2"
                onClick={() => setPopupIndex((i) => (i === 0 ? clusters.length - 1 : i - 1))}
                aria-label="Previous"
              >
                &#9664;
              </button>
              <div className="flex gap-4 flex-1 justify-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-8 py-2 text-lg shadow"
                  onClick={() => alert('Deploy action!')}
                >
                  Deploy
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg px-8 py-2 text-lg shadow"
                  onClick={() => { setShowPopup(false); }}
                >
                  Details
                </button>
              </div>
              <button
                className="text-3xl text-gray-500 hover:text-black px-2"
                onClick={() => setPopupIndex((i) => (i === clusters.length - 1 ? 0 : i + 1))}
                aria-label="Next"
              >
                &#9654;
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <span className="text-xl text-[#B92727] font-bold">Loading allocation data...</span>
        </div>
      )}
    </main>
  );
}