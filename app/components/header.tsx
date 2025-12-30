"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path
      ? "text-[#1C2A7D] font-bold"
      : "text-slate-600 hover:text-[#1C2A7D]";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Blogs", path: "/blogs" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" 
        : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.svg"
            alt="Vestigo Logo"
            width={170}
            height={45}
            priority
            className="block h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`${isActive(link.path)} text-sm tracking-tight transition-all relative group`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1C2A7D] transition-all duration-300 group-hover:w-full ${pathname === link.path ? "w-full" : "w-0"}`} />
            </Link>
          ))}
        </nav>

        {/* ACTION AREA */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-slate-400 hover:text-[#1C2A7D] transition-colors">
            <Search size={20} />
          </button>
          <Link 
            href="/contact-us" 
            className="bg-[#1C2A7D] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-[#15205d] transition-all active:scale-95 flex items-center gap-2"
          >
            Get Quote
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#1C2A7D]" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${isActive(link.path)} text-lg flex justify-between items-center`}
              onClick={() => setOpen(false)}
            >
              {link.name}
              <ChevronRight size={18} className="opacity-30" />
            </Link>
          ))}
          <Link 
            href="/contact-us"
            className="w-full bg-[#1C2A7D] text-white py-4 rounded-2xl font-bold text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}