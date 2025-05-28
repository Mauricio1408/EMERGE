import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f6fa] flex flex-col items-center py-12 px-4">
 
      <section className="max-w-4xl w-full text-center mb-12">
        <img src="/logo.svg" alt="EMERGE Logo" className="mx-auto w-16 h-16 mb-8 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#b92727] mb-6">About EMERGE</h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-[#b92727]">EMERGE</span> is an undergraduate thesis project that enhances emergency response team allocation and prepositioning. It combines a Risk-based Emergency Modelling Algorithm (REM) and a Resource Allocation Method (RAM) with Geographic Information Systems (GIS) for hazard visualization. 
          <br />
          <br />
          This system boosts disaster preparedness and response efficiency by analyzing emergency reports, visualizing risks on a GIS platform, and prepositioning emergency resource teams through clustering algorithms. Focusing on natural disasters like floods, landslides, and earthquakes in Santa Barbara, Iloilo City, EMERGE provides hazard probability mapping and resource placement recommendations, optimizing responder and equipment deployment to minimize casualties and damages.
        </p>
      </section>


      <section className="max-w-4xl w-full grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-2">🎯</span>
          <h2 className="text-2xl font-bold text-[#b92727] mb-2">Our Mission</h2>
          <p className="text-gray-700 text-center">
            To enhance emergency preparedness and response efficiency by strategically prepositioning response teams and resources using risk assessment and GIS visualization.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-2">🌈</span>
          <h2 className="text-2xl font-bold text-[#b92727] mb-2">Our Vision</h2>
          <p className="text-gray-700 text-center">
            Empowered communities and improve overall resilience against hazards through data-driven emergency management
          </p>
        </div>
      </section>


      <section className="max-w-5xl w-full mb-16">
        <h2 className="text-3xl font-bold text-center text-[#b92727] mb-8">Meet the Team</h2>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-8">
          
          <div className="bg-white w-56 rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src="/profile.jpg" alt="Dev 1" className="w-24 h-24 rounded-full mb-3 border-4 border-[#b92727] object-cover" />
            <h3 className="text-xl font-bold text-[#b92727] text-center">Dhominick John Billena</h3>
            <p className="text-gray-700 text-sm mb-1">System Implementation</p>
            <span className="text-xs text-gray-500 text-center">" Turns plans into buttons, code, and magic."</span>
          </div>
  
          <div className="bg-white w-56 rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src="/berg.png" alt="Dev 2" className="w-24 h-24 rounded-full mb-3 border-4 border-[#b92727] object-cover" />
            <h3 className="text-xl font-bold text-[#b92727] text-center">Mauricio Manuel Bergancia</h3>
            <p className="text-gray-700 text-sm mb-1">System Designer</p>
            <span className="text-xs text-gray-500 text-center">"Draws the map before anyone starts the journey."</span>
          </div>
      
          <div className="bg-white w-56 rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src="/cha.png" alt="Dev 3" className="w-24 h-24 rounded-full mb-3 border-4 border-[#b92727] object-cover" />
            <h3 className="text-xl font-bold text-[#b92727] text-center">Mherlie Joy Chavez</h3>
            <p className="text-gray-700 text-sm mb-1">Project Manager</p>
            <span className="text-xs text-gray-500 text-center">"Schedules the chaos and makes it look easy."</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-36">
      
          <div className="bg-white w-56 rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src="/cal.png" alt="Dev 4" className="w-24 h-24 rounded-full mb-3 border-4 border-[#b92727] object-cover" />
            <h3 className="text-xl font-bold text-[#b92727] text-center">Gillie Calanuga</h3>
            <p className="text-gray-700 text-sm mb-1">System Administrator</p>
            <span className="text-xs text-gray-500 text-center">"Keeps the system alive, awake, and updated."</span>
          </div>
  
          <div className="bg-white w-56 rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src="/tua.jpg" alt="Dev 5" className="w-24 h-24 rounded-full mb-3 border-4 border-[#b92727] object-cover" />
            <h3 className="text-xl font-bold text-[#b92727] text-center">Michael Rey Tuando</h3>
            <p className="text-gray-700 text-sm mb-1">UI/UX Architect</p>
            <span className="text-xs text-gray-500 text-center">"Makes sure users smile, not squint. "</span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl w-full text-center mb-10">
        <h2 className="text-2xl font-bold text-[#b92727] mb-6">A Thesis with a Purpose</h2>
        <p className="text-gray-700 mb-2 text-1xl">EMERGE is an undergraduate thesis project developed by Bachelor of Science in Computer Science students at West Visayas State University.</p>
        <p className="text-gray-700 mb-2  text-1xl">While fulfilling academic requirements, its aim is to provide real-world impact by enhancing disaster response efforts through hazard visualization and optimized resource distribution. The project seeks to empower local communities, responders, and government agencies like the Iloilo City CDRRMO and NDRRMC with data-driven technology to strategically deploy resources, plan evacuations, and improve preparedness.</p>
      </section>

      <section className="max-w-3xl w-full text-center mt-12 mb-10">
        <h2 className="text-2xl font-bold text-[#b92727] mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-2">Email: <a href="mailto:emerge.team@wvsu.edu.ph" className="text-[#b92727] underline">emerge.team@wvsu.edu.ph</a></p>
        <p className="text-gray-700 mb-2">Location: Iloilo City, Philippines</p>
        <p className="text-gray-700 mb-2">GitHub / Portfolio: <a href="https://github.me.com" className="text-[#b92727] underline">github.me.com</a></p>
        <p className="text-gray-500 mt-4">Thank you for supporting our mission to make Santa Barbara safer and more resilient! <span className="text-2xl">💖</span></p>
      </section>
    </main>
  );
}