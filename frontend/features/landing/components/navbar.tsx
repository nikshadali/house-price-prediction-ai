"use client";

import { buttonVariants } from '@/components/ui/button';
import { Home, Moon, Menu, X } from 'lucide-react';
import { Github } from '@/components/icons';
import Link from 'next/link';
import React, { useState } from 'react';

const navigation = [
  { label: "Predict", href: "#predict", active: true },
  { label: "About", href: "#about" },
  { label: "Dataset", href: "#dataset" },
  { label: "Model", href: "#model" },
  { label: "API", href: "#api" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#040810]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00E599]/10 text-[#00E599]">
            <Home className="size-5" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">House Price AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex h-full items-center">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm h-full flex items-center border-b-2 transition-colors ${item.active
                  ? "border-[#00E599] text-[#00E599] font-medium"
                  : "border-transparent text-slate-400 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-400 hover:text-white transition-colors">
            <Moon className="size-5" />
          </button>
          <Link href="https://github.com/nikshadali/house-price-prediction-ai" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-[#111827] border-[#1F2937] text-white hover:bg-[#1F2937] hover:text-white gap-2 rounded-lg h-9 px-4" })}>
            <Github className="size-4" />
            <span className="text-sm font-medium">GitHub</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden flex items-center justify-center text-slate-400 hover:text-white z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-white/5 bg-[#040810] px-6 py-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${item.active
                    ? "text-[#00E599]"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-2">
            <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Moon className="size-5" />
              <span className="text-sm font-medium">Theme</span>
            </button>
            <Link href="https://github.com/nikshadali/house-price-prediction-ai" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-[#111827] border-[#1F2937] text-white hover:bg-[#1F2937] hover:text-white gap-2 rounded-lg h-9 px-4" })}>
              <Github className="size-4" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;
