import React from 'react';

export default function LocationMap() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="location">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[150px] rounded-full opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-gold font-black tracking-[0.5em] uppercase text-xs">Our Location</span>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter uppercase">
              Visit us on <span className="text-gold">Google Maps</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              Find our office location directly on the map and open directions in one tap.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=25.193375,55.260395"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium !px-8 !py-4 rounded-2xl shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
              >
                Open Directions
              </a>
              <a
                href="https://maps.app.goo.gl/dNAwfz37DKNCMrRx8"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold/50 px-8 py-4 rounded-2xl font-black text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                View Exact Pin
              </a>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-3">Coordinates</p>
              <p className="text-black font-black text-lg">25.193375, 55.260395</p>
              <p className="text-gray-500 text-sm mt-2">Sheikh Zayed Road, Dubai, UAE</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="h-[420px] md:h-[520px] w-full relative overflow-hidden rounded-[36px] border border-gray-100 shadow-2xl bg-white">
              <iframe
                title="Golden Legacy Exact Location"
                src="https://www.google.com/maps?q=25.193375,55.260395&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />

              <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 bg-black/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                  Sheikh Zayed Road, Dubai
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=25.193375,55.260395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs md:text-sm font-semibold hover:text-gold/80 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
