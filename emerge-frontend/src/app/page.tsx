'use client';

export default function HomePage() {

  return (
    <main>
      <section
        className="min-h-[90vh] flex flex-col justify-center items-center text-white text-center p-8 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Enhanced Emergency Response,</h1>
          <h1 className="text-4xl md:text-5xl font-bold">Tailored for Santa Barbara, Iloilo</h1>
          <p className="text-base font-normal max-w-[690px] mx-auto mt-4">
            EMERGE is an emergency management system that visualizes hazards, analyzes risk zones, and optimizes
            resource allocation using a clustering algorithm—empowering responders and protecting communities.
          </p>
        </div>

        <button
          className="bg-[#dde1e4] text-[#b92727] px-6 py-3 text-lg font-bold rounded-2xl cursor-pointer mt-12 border-none transition-all duration-300 z-10 hover:bg-[#b92727] hover:text-white"
          onClick={() => (window.location.href = '/risk-map')}
        >
          View Risk Map
        </button>

        <div className="absolute inset-0 w-full h-full z-0" />
      </section>


      <section className="bg-[#dde1e4] py-15 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 mt-6 text-[#2e2c2f]">
            How <span className="text-[#b92727]">EMERGE</span> works
          </h2>
          <p className="text-center text-gray-700 mb-12">
            A clustering-enhanced GIS workflow for hazard assessment and strategic resource allocation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left h-90">
              <h3 className="text-3xl font-bold mb-22">Analyze historical data</h3>
              <p className="text-sm">
                EMERGE uses historical records of floods, earthquakes, and landslides in{' '}
                <span className="font-bold">Santa Barbara, Iloilo</span> to identify hazard-prone areas.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left">
              <h3 className="text-3xl font-bold mb-21">Visualize Risk Zones with GIS</h3>
              <p className="text-sm">
                Hazards are plotted on an interactive GIS map, showing heat zones and vulnerability levels based on past data.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left">
              <h3 className="text-3xl font-bold mb-12">Allocate Resources Using Clustering</h3>
              <p className="text-sm">
                Our system applies a clustering algorithm to suggest efficient responder and supply distribution based on
                population density and risk severity.
              </p>
            </div>
            <div className="bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left">
              <h3 className="text-3xl font-bold mb-20">Support Planning and Readiness</h3>
              <p className="text-sm">
                EMERGE recommends optimal responder assignments and pre-positioning strategies for high-risk zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#650000] py-15 px-4">
        <div className="max-w-5xl mx-auto text-[#dde1e4]"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 mt-6">
            What <span className="text-[#dde1e4]">EMERGE</span> can do
          </h2>
          <p className="text-center text-[#dde1e4] mb-12">
            Core features that combine hazard mapping, data clustering, and resource optimization.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-8 max-w-6xl mx-auto">
      
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-[#dde1e4] mb-2">Hazard Heatmaps</h3>
            <p className="text-lg text-[#dde1e4]">Visualize vulnerable areas using layered historical data.</p>
          </div>
          <div className="flex justify-end items-start">
            <div className="bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]" />
          </div>
    
          <div className="flex justify-start items-end">
            <div className="bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-[#dde1e4] mb-2">Strategic Resource Allocation</h3>
            <p className="text-lg text-[#dde1e4]">Smart deployment of responders based on hazard clustering.</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-[#dde1e4] mb-2">Barangay-Level Risk
            Insights</h3>
            <p className="text-lg text-[#dde1e4]">Zoom in to identify at-risk areas
            and population density.</p>
          </div>
          <div className="flex justify-end items-start">
            <div className="bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]" />
          </div>
       
          <div className="flex justify-start items-end">
            <div className="bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold text-[#dde1e4] mb-2">Data-Driven Recommendations</h3>
            <p className="text-lg text-[#dde1e4]">Support planning with location-based suggestions and risk prioritization.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#dde1e4] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-10">
            <div className="h-2 w-20 bg-[#b92727] mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#222] mr-4">Developed in Coordination With</h2>
            <div className="flex-1 h-2 bg-[#b92727] ml-2" />
          </div>
          <div className="flex justify-between items-center gap-4 md:gap-8 px-2">
            <img src="/wvsu-logo.png" alt="Logo 1" className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain bg-[]" />
            <img src="/cict-logo.png" alt="Logo 2" className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain bg-[]" />
            <img src="/sb-logo.png" alt="Logo 3" className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain bg-[]" />
            <img src="/sbdrrmo.jpg" alt="Logo 4" className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain bg-[]" />
            <img src="/trrdmo.jpg" alt="Logo 5" className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain bg-[]" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#b92727] to-[#3f0000]/80 py-15 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#dde1e4]">
            Want to know more about <span className="text-[#dde1e4] font-bold">EMERGE</span>?
          </h2>
          <p className="text-md text-[#dde1e4] mb-8">
            Read more about how EMERGE helps in building a safer, more resilient community.
          </p>
          <button
            className="bg-[#dde1e4] text-[#b92727] px-4 py-2 text-lg font-bold rounded-2xl cursor-pointer mt-5 border-none transition-all duration-300 z-10 hover:bg-[#b92727] hover:text-white"
            onClick={() => (window.location.href = '/risk-map')}
          >
            About EMERGE
          </button>
        </div>
      </section>

      <footer className="bg-[#2e2c2f] text-[#dde1e4] py-10 px-2 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
 
          <div className="flex flex-col items-start gap-4 min-w-[260px]">
            <img src="/logo.svg" alt="EMERGE Logo" className="w-50 h-12 mb-2 ml-0" />
            <span className="font-semibold italic text-lg leading-tight ml-8">
              Emergency Responder Allocation<br />
              System for
              Hazard Mapping and Planning<br />
            </span>
          </div>
   
          <div className="flex flex-col items-start gap-2 min-w-[180px] md:ml-[-80]">
            <span className="font-bold mb-1">EXPLORE</span>
            <a href="/" className="hover:underline">Home</a>
            <a href="/risk-map" className="hover:underline">Risk Map</a>
            <a href="/hazard-visualization" className="hover:underline">Hazard Visualization</a>
            <a href="/responder-allocation" className="hover:underline">Responder Allocation</a>
            <a href="/about" className="hover:underline">About Us</a>
          </div>

          <div className="flex flex-col items-start gap-2 min-w-[220px] md:mr-[80] mt-[-68]">
            <span className="font-bold mb-1">CONTACTS</span>
            <span>Email: emerge.team@wvsu.edu.ph</span>
            <span>Location: Iloilo City, Philippines</span>
            <span>GitHub / Portfolio: github.me.com</span>
          </div>
        </div>
        <div className="text-center text-[#dde1e4] mt-12 text-sm">EMERGE 2025</div>
      </footer>
    </main>
  );
}
