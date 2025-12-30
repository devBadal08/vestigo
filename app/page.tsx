"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Wallet, RefreshCw, Headphones, ArrowRight } from "lucide-react";

type VantaEffect = {
  destroy: () => void;
};

export default function HomePage() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // MODIFIED COLORS TO MATCH VESTIGO
          color: 0xcbff15,      // Your Brand Indigo
          color2: 0x3b82f6,     // Light Blue
          backgroundColor: 0xd004e, // White background for "Light Theme"
          size: 1.1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <main className="relative min-h-screen w-full">
      {/* 1. VANTA GLOBE BACKGROUND */}
      <div 
        ref={vantaRef} 
        className="fixed inset-0 z-0" 
        style={{ height: '100vh', width: '100%' }}
      />

      {/* 2. HERO CONTENT SECTION */}
      <section className="relative z-10 w-full pt-32 pb-12">
        {/* Added a more constrained container with higher padding (px-8 to px-12) */}
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
            
            {/* LEFT CONTENT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              {/* ... (Keep your Pill, Heading, and Subtext code here) ... */}
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                  Modern Risk Protection
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Secure Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Legacy.
                </span>
              </h1>

              <p className="text-lg text-slate-300/90 leading-relaxed font-medium mb-12 max-w-md">
                Beyond just insurance — we provide a digital-first safety net for forward-thinking enterprises.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link 
                  href="/contact-us" 
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 group"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE: HERO IMAGE */}
<motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block relative"
          >
            {/* Visual Glass Card Effect */}
            <div className="relative z-10 backdrop-blur-3xl bg-white/10 p-2 rounded-[3rem] border border-white/20 shadow-2xl">
              <div className="rounded-[2.5rem] overflow-hidden">
                 <img 
                  src="/images/logo.svg" 
                  alt="Insurance Hero"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-20 border border-slate-100"
            >
              <div className="bg-blue-600 p-3 rounded-2xl">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <div>
                <p className="text-slate-900 font-black text-xl leading-none">100%</p>
                <p className="text-slate-500 text-sm font-medium">Secured Assets</p>
              </div>
            </motion.div>
          </motion.div>

          </div>

          {/* 3. THE PROFESSIONAL SERVICE BAR */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Wallet />, label: "Advice", sub: "Strategic Planning" },
                { icon: <ShieldCheck />, label: "Purchase", sub: "Global Policy" },
                { icon: <RefreshCw />, label: "Renewal", sub: "Seamless Flow" },
                { icon: <Headphones />, label: "Claims", sub: "Instant Support" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1C2A7D] transition-all duration-300 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm">{item.label}</h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}