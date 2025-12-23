"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState("");
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-coconut relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="bg-navy p-12 text-white md:w-2/5">
            <h2 className="text-3xl font-serif font-bold mb-6">Contact Us</h2>
            <p className="text-white/70 mb-8 font-medium">
              Want to stock our delights or book us for an event? Drop us a message!
            </p>
            <div className="space-y-4 text-sm">
              <p>📍 Quezon City, Philippines</p>
              <p>✉️ hello@tmfrozendelights.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-12 md:w-3/5 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" placeholder="Your Name" required
                className="w-full px-6 py-4 rounded-xl bg-coconut border border-caramel/20 focus:outline-none focus:border-strawberry text-navy font-medium"
              />
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" placeholder="Email Address" required
                className="w-full px-6 py-4 rounded-xl bg-coconut border border-caramel/20 focus:outline-none focus:border-strawberry text-navy font-medium"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" rows={4} required
                className="w-full px-6 py-4 rounded-xl bg-coconut border border-caramel/20 focus:outline-none focus:border-strawberry text-navy font-medium"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-strawberry text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              {status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}