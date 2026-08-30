import React from 'react';

export default function LocationMap() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="location">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-electric-sapphire/5 blur-[150px] rounded-full opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-electric-sapphire font-black tracking-[0.5em] uppercase text-xs">Our Location</span>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight tracking-tighter uppercase">
              Visit us on <span className="text-electric-sapphire">Google Maps</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              Find our office location directly on the map and open directions in one tap.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/D7vXAY3lmRRJu2UDN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium !px-8 !py-4 rounded-2xl shadow-[0_20px_40px_rgba(84,101,255,0.2)]"
              >
                Open Directions
              </a>
              <a
                href="https://share.google/D7vXAY3lmRRJu2UDN"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-electric-sapphire/50 px-8 py-4 rounded-2xl font-black text-electric-sapphire hover:bg-electric-sapphire hover:text-black transition-all duration-300"
              >
                View Exact Pin
              </a>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-3">Coordinates</p>
              <p className="text-black font-black text-lg">25.193375, 55.260395</p>
              <p className="text-gray-500 text-sm mt-2">106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="h-[420px] md:h-[520px] w-full relative overflow-hidden rounded-[36px] border border-gray-100 shadow-2xl bg-white">
              <iframe
                title="Juno BizHub Exact Location"
                src="https://www.google.com/maps?q=Aspin+Commercial+Tower+Dubai&z=16&output=embed"
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
                  106 Sheikh Zayed Rd - Trade Center First - Dubai, Aspin Commercial Tower
                </p>
                <a
                  href="https://share.google/D7vXAY3lmRRJu2UDN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-sapphire text-xs md:text-sm font-semibold hover:text-electric-sapphire/80 transition-colors"
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
