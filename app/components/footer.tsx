"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="space-y-6">
            <Image
              src="/images/logo.svg"
              alt="Vestigo Logo"
              width={150}
              height={40}
              className="brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the way in smarter insurance decisions through domain expertise and innovative risk solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about-us" className="hover:text-white flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /> Who we are</Link></li>
              <li><Link href="/solutions" className="hover:text-white flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /> What we do</Link></li>
              <li><Link href="/industries" className="hover:text-white flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /> Industries</Link></li>
              <li><Link href="/blogs" className="hover:text-white flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /> Insights</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Risk Management</li>
              <li className="hover:text-white cursor-pointer transition-colors">Life Insurance</li>
              <li className="hover:text-white cursor-pointer transition-colors">Marine & Cargo</li>
              <li className="hover:text-white cursor-pointer transition-colors">Claims Assistance</li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-indigo-400 shrink-0" />
                <span>123 Finance Square, Corporate Tower, City</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-indigo-400 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-indigo-400 shrink-0" />
                <span>contact@vestigo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {currentYear} Vestigo. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}