"use client";

import React, { useState } from 'react';
import { 
  Scale, Mail, Phone, MapPin, Linkedin, Twitter, 
  CheckCircle, Landmark, Balance, Search, Globe, 
  Clock, Shield, Award, Users, ArrowRight 
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
    <div className="flex items-center gap-2 text-blue-900 font-bold text-xl cursor-pointer" onClick={() => setActivePage('home')}>
      <Scale size={28} />
      <span>Celestine Omene & Assoc.</span>
    </div>
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
      {['home', 'about', 'practice', 'team', 'insights', 'contact'].map((page) => (
        <button 
          key={page}
          onClick={() => setActivePage(page)}
          className={`capitalize hover:text-blue-700 transition ${activePage === page ? 'text-blue-800 border-b-2 border-blue-800' : ''}`}
        >
          {page === 'practice' ? 'Practice Areas' : page === 'about' ? 'About Firm' : page}
        </button>
      ))}
      <button className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
        Book Consultation
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-16 pb-8 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <Scale size={24} className="text-blue-400" />
          <span>Celestine Omene & Assoc.</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          A premier Nigerian law firm dedicated to providing exceptional legal services with integrity and excellence.
        </p>
        <div className="flex gap-4">
          <Twitter size={18} className="text-slate-400 cursor-pointer hover:text-white" />
          <Linkedin size={18} className="text-slate-400 cursor-pointer hover:text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>About Us</li><li>Our Team</li><li>Careers</li><li>News & Insights</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-6">Practice Areas</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>Corporate & Commercial</li><li>Real Estate & Property</li><li>Dispute Resolution</li><li>Intellectual Property</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-6">Contact</h4>
        <ul className="space-y-4 text-sm text-slate-400">
          <li className="flex gap-3"><MapPin size={18} /> 123 Legal Avenue, Victoria Island, Lagos</li>
          <li className="flex gap-3"><Phone size={18} /> +234 800 123 4567</li>
          <li className="flex gap-3"><Mail size={18} /> info@celestineomene.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between text-xs text-slate-500">
      <p>© 2024 Celestine Omene & Associates. All rights reserved.</p>
      <div className="flex gap-6"><span>Privacy Policy</span><span>Terms of Service</span></div>
    </div>
  </footer>
);

// --- Screen 1: Home Screen ---
const HomeScreen = () => (
  <div>
    <section className="relative h-[600px] bg-slate-900 flex items-center px-12 text-white">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div className="relative z-10 max-w-3xl">
        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Top-Tier Legal Advice in Nigeria</span>
        <h1 className="text-6xl font-bold mt-6 leading-tight">Legal Insight.<br/>Strategic Representation.</h1>
        <p className="text-xl text-slate-300 mt-6">Providing world-class legal solutions for complex challenges in Nigeria and beyond.</p>
        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 px-8 py-3 rounded font-bold hover:bg-blue-700">Schedule a Consultation →</button>
          <button className="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10">Explore Practice Areas</button>
        </div>
      </div>
    </section>
    
    <section className="py-12 bg-white border-b flex justify-around max-w-7xl mx-auto text-center">
      {[["25+", "Years of Experience"], ["500+", "Successful Cases"], ["50+", "Corporate Clients"], ["100%", "Client Dedication"]].map(([num, text]) => (
        <div key={text}><div className="text-3xl font-bold text-blue-900">{num}</div><div className="text-sm text-slate-500">{text}</div></div>
      ))}
    </section>
  </div>
);

// --- Screen 2: Practice Area (Litigation) ---
const PracticeScreen = () => (
  <div className="bg-white">
    <div className="bg-slate-900 py-20 px-12 text-white">
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Practice Area</span>
        <h1 className="text-4xl font-bold mt-2">Litigation & Dispute Resolution</h1>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8">
        <p className="text-lg text-slate-600">Our litigation team represents clients across all superior courts of record in Nigeria, ensuring due process and robust representation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Commercial & Corporate Litigation", "Debt Recovery & Insolvency", "Employment Disputes", "Real Estate & Property"].map(title => (
            <div key={title} className="p-6 border rounded-xl hover:shadow-lg transition">
              <CheckCircle className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-slate-500">Comprehensive legal support tailored to your specific dispute needs.</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="space-y-6">
        <div className="p-6 bg-slate-50 rounded-xl border">
          <h4 className="font-bold mb-4 border-b pb-2">Practice Areas</h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="text-blue-700 font-bold">Litigation & Dispute Resolution</li>
            <li>Corporate & Commercial</li><li>Real Estate & Property</li><li>Intellectual Property</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
);

// --- Screen 3: About Firm ---
const AboutScreen = () => (
  <div className="bg-white">
    <section className="bg-slate-950 py-24 text-center text-white">
      <h1 className="text-5xl font-bold mb-4">About the Firm</h1>
      <p className="text-slate-400 max-w-2xl mx-auto">Excellence in Legal Practice. Providing clarity and trust in every case across Nigeria and beyond.</p>
    </section>
    <section className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-blue-600 font-bold text-sm uppercase">Our History</span>
        <h2 className="text-3xl font-bold mt-4 mb-6 leading-tight">Rooted in Nigerian Excellence, Built on Global Standards.</h2>
        <p className="text-slate-600 leading-relaxed">Since our establishment, we have been committed to navigating complex legal landscapes with precision and integrity. We bring a tailored approach to legal representation.</p>
      </div>
      <div className="bg-slate-100 rounded-2xl h-80 overflow-hidden shadow-xl italic flex items-center justify-center text-slate-400">
        [Image: Modern Office Interior]
      </div>
    </section>
  </div>
);

// --- Screen 4: Team Profile ---
const TeamScreen = () => (
  <div className="bg-white py-16 px-8 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-12">
      <div className="space-y-6">
        <div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Celestine Omene" className="w-full h-full object-cover" />
        </div>
        <div className="bg-blue-900 text-white p-6 rounded-xl">
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest opacity-70">At a Glance</h4>
          <div className="space-y-4 text-sm">
            <div><div className="opacity-60 uppercase text-[10px]">Education</div>LL.B, University of Lagos</div>
            <div><div className="opacity-60 uppercase text-[10px]">Admitted</div>Nigerian Bar, 2010</div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Celestine Omene, Esq.</h1>
          <p className="text-blue-600 font-medium">Principal Counsel</p>
        </div>
        <div className="prose text-slate-600 max-w-none">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Users size={20}/> Biography</h3>
          <p className="mt-4">Celestine Omene is a seasoned legal practitioner with a profound understanding of the Nigerian legal landscape. With over a decade of experience, he has built a reputation for meticulous advocacy.</p>
        </div>
        <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-blue-600 italic text-slate-700">
          "Our duty is not merely to interpret the law, but to apply it with conscience and a steadfast dedication to the truth."
        </div>
      </div>
    </div>
  </div>
);

// --- Screen 5: Insights ---
const InsightsScreen = () => (
  <div className="bg-slate-50 min-h-screen">
    <div className="bg-white py-16 px-8 text-center border-b">
       <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">Legal Knowledge Base</span>
       <h1 className="text-4xl font-bold mt-4">Insights & Legal Commentary</h1>
    </div>
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
        {['All Insights', 'Contract Law', 'Real Estate', 'Employment'].map(cat => (
          <button key={cat} className={`px-6 py-2 rounded-full whitespace-nowrap ${cat === 'All Insights' ? 'bg-blue-700 text-white' : 'bg-white border text-slate-600'}`}>{cat}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition">
            <div className="h-48 bg-slate-200"></div>
            <div className="p-6">
              <span className="text-blue-600 text-xs font-bold uppercase">Contract Law</span>
              <h3 className="font-bold text-lg mt-2 group-hover:text-blue-700 transition">Understanding Your Rights in Contractual Agreements</h3>
              <p className="text-slate-500 text-sm mt-3 line-clamp-2">A deep dive into the essential elements of a binding contract under Nigerian law...</p>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Oct 24, 2023</span>
                <span className="font-bold text-blue-600">Read More →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Screen 6: Contact ---
const ContactScreen = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-16">
      <div>
        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Contact Us</span>
        <h1 className="text-4xl font-bold mt-4 mb-8">Professional legal guidance with clarity and trust.</h1>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0"><MapPin/></div>
            <div><h4 className="font-bold">Office Address</h4><p className="text-slate-500 text-sm">123 Legal Avenue, Victoria Island, Lagos, Nigeria</p></div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0"><Phone/></div>
            <div><h4 className="font-bold">Phone Support</h4><p className="text-slate-500 text-sm">+234 800 123 4567<br/>Mon-Fri, 9am-5pm</p></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border shadow-xl">
        <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border rounded-lg w-full outline-blue-600" />
            <input type="email" placeholder="Email Address" className="p-3 border rounded-lg w-full outline-blue-600" />
          </div>
          <input type="text" placeholder="Subject" className="p-3 border rounded-lg w-full outline-blue-600" />
          <textarea placeholder="How can we help?" rows="4" className="p-3 border rounded-lg w-full outline-blue-600"></textarea>
          <button className="bg-blue-700 text-white w-full py-3 rounded-lg font-bold hover:bg-blue-800 transition">Request Appointment</button>
        </form>
      </div>
    </div>
  </div>
);

// --- Main App Export ---
export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <HomeScreen />;
      case 'about': return <AboutScreen />;
      case 'practice': return <PracticeScreen />;
      case 'team': return <TeamScreen />;
      case 'insights': return <InsightsScreen />;
      case 'contact': return <ContactScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="min-h-[80vh]">
        {renderContent()}
      </main>
      
      {/* Universal CTA */}
      <section className="bg-blue-700 py-20 px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to secure your future?</h2>
        <p className="mb-10 text-blue-100 max-w-xl mx-auto">Schedule a consultation with our senior partners today to discuss your legal needs.</p>
        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition">Book Consultation</button>
      </section>

      <Footer />
    </div>
  );
}