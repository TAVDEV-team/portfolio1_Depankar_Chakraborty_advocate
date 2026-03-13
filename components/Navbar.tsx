"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Practice Areas", href: "/Practice_Areas" },
    { name: "Blog", href: "/Blog" },
    { name: "FAQ", href: "/FAQ" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-3xl">⚖️</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">
                Advocate Chakroborty
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500">
                Judge Court of Bangladesh
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-black">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <HiMenu className="w-8 h-8 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-xl transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <HiX className="w-8 h-8 text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-lg font-medium hover:text-primary transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
}