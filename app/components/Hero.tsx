import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-coconut pt-28 pb-28 md:pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-coconut via-coconut/80 to-transparent z-10" />
        <img 
          src="R.jpg" 
          alt="Premium handcrafted ice cream" 
          className="w-full h-full object-cover object-right translate-x-20 md:translate-x-0"
        />
      </div>

      <div className="container mx-auto px-8 z-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-caramel uppercase bg-white/50 backdrop-blur-sm rounded-md border border-caramel/20">
            <span className="w-2 h-2 rounded-full bg-strawberry animate-pulse" />
            TM's Frozen Delights
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black text-navy leading-[1.1] mb-6">
            The Art of the <br /> 
            <span className="text-strawberry drop-shadow-sm">Perfect Scoop.</span>
          </h1>

          <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-lg font-medium leading-relaxed">
            From timeless classics to daring seasonal creations, we’re on a mission to deliver unparalleled frozen joy to your door and to businesses looking to sweeten their offerings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="inline-block text-center bg-navy text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-navy/90 hover:-translate-y-1 transition-all"
            >
              Browse Our Menu
            </a>

            <a 
              href="#contact" 
              className="inline-block text-center bg-white/80 backdrop-blur-md border-2 border-caramel/30 text-caramel px-10 py-4 rounded-full text-lg font-bold hover:bg-caramel hover:text-coconut transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-2xl border border-white/30 rotate-3 shadow-xl">
          <p className="text-navy font-bold italic text-sm">"The best scoop in Manila!" — FoodBuds PH</p>
        </div>
      </div>
    </section>
  );
}