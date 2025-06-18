"use client";

import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased tsukimi`}>
        {/* Navigation - Fashion Style */}
        <nav className="bg-white sticky top-0 z-10 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              {/* Top row with name and title */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h1 className="text-2xl md:text-3xl text-charcoal tsukimi">SHONCI HEIDELBERG</h1>
                  <p className="text-xs md:text-sm font-montserrat text-charcoal/80">Stylist based in Los Angeles, CA</p>
                </div>
                
                {/* Mobile menu button */}
                <button 
                  className="md:hidden text-charcoal focus:outline-none" 
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* Bottom row with navigation links - Desktop */}
              <div className="hidden md:flex justify-between items-center border-t border-b border-charcoal/20 py-2">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">Home</Link>
                  <a href="#about" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">About</a>
                  <a href="#services" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">Styling Services</a>
                  <a href="#packages" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">Packages</a>
                  <a href="#booking" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">Book Now</a>
                  <Link href="/faq" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">FAQs</Link>
                  <a href="#contact" className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300">Contact</a>
                </div>
                {/* Instagram icon */}
                <div className="flex items-center">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-accent transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Mobile Navigation Menu */}
              {isMenuOpen && (
                <div className="md:hidden border-t border-charcoal/20 py-4">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="/" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <a 
                      href="#about" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                    <a 
                      href="#services" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Styling Services
                    </a>
                    <a 
                      href="#packages" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Packages
                    </a>
                    <a 
                      href="#booking" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Now
                    </a>
                    <Link 
                      href="/faq" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQs
                    </Link>
                    <a 
                      href="#contact" 
                      className="text-charcoal hover:text-accent text-sm font-montserrat uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                    <div className="pt-2">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-accent transition-colors duration-300 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
        {children}

      </body>
    </html>
  );
}
