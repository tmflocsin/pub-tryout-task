import React from 'react';
import { ShoppingBag, Truck, Building2, Star } from 'lucide-react';

const flavors = [
  { 
    name: "Barako Mocha", 
    tag: "Classic", 
    desc: "Strong Batangas barako coffee with dark chocolate chunks",
    image: "flavor1.jpg" 
  },
  { 
    name: "Strawberry Sorbet", 
    tag: "Special",
    desc: "Fresh and refreshing Benguet berries in a light sorbet base", 
    image: "flavor2.jpg" 
  },
  { 
    name: "Ube Halaya", 
    tag: "Classic", 
    desc: "Rich Bohol purple yam with milk and cheese swirls",
    image: "flavor3.jpg" 
  },
  { 
    name: "Mango Bravo", 
    tag: "Deluxe", 
    desc: "Sweet Guimaras mango with crunchy graham bits",
    image: "flavor4.jpg" 
  },
  { 
    name: "Chocnut Swirl", 
    tag: "Special", 
    desc: "A nostalgic peanut-chocolate local favorite",
    image: "flavor5.jpg" 
  },
  { 
    name: "Pastillas de Leche", 
    tag: "Deluxe", 
    desc: "Creamy carabao milk ice cream with soft milk candy pieces",
    image: "/flavor6.jpg" 
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-black text-navy mb-4">Our Menu</h2>
          <p className="text-caramel text-lg font-medium">Your next favorite flavor awaits.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {flavors.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-coconut border border-caramel/10 aspect-square">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent opacity-80" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <span className="text-[10px] font-bold text-strawberry bg-white px-2 py-1 rounded uppercase tracking-widest mb-3">
                  {f.tag}
                </span>

                <h3 className="text-2xl font-serif font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {f.name}
                </h3>

                <p className="text-white/80 text-sm font-medium leading-relaxed opacity-0 max-h-0 translate-y-4 group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0 transition-all duration-500">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-caramel/10">
          <div className="flex flex-col items-center text-center p-6">
            <ShoppingBag className="text-strawberry mb-4" size={40} />
            <h4 className="text-xl font-bold text-navy mb-2">Home Delivery</h4>
            <p className="text-navy/60 text-sm">Pints delivered straight to your doorstep across Metro Manila.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Truck className="text-strawberry mb-4" size={40} />
            <h4 className="text-xl font-bold text-navy mb-2">Event Cart</h4>
            <p className="text-navy/60 text-sm">Our vintage-style ice cream cart is perfect for weddings and parties.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Building2 className="text-strawberry mb-4" size={40} />
            <h4 className="text-xl font-bold text-navy mb-2">Wholesale</h4>
            <p className="text-navy/60 text-sm">Premium supply solutions for cafes, restaurants, and hotels.</p>
          </div>
        </div>

      </div>
    </section>
  );
}