import React from 'react';
import { Home, Heart } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#040810] mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Home className="size-4 text-slate-500" />
          <span className="text-sm font-semibold text-slate-300">House Price Prediction AI</span>
        </Link>

        {/* Center Credits */}
        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          Built with <Heart className="size-3 text-red-500 fill-red-500" /> using 
          <span className="text-slate-300 font-medium">Next.js, FastAPI</span> & <span className="text-slate-300 font-medium">Machine Learning</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link href="https://www.facebook.com/naikshad.ali" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Facebook className="size-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/nikshadali/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin className="size-4" />
          </Link>
          <Link href="https://github.com/nikshadali/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
