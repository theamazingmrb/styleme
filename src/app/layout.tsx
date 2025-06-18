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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-lato`}>
        {/* Navigation - Fashion Style */}
        <nav className="bg-white sticky top-0 z-10 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              {/* Top row with name and title */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h1 className="text-2xl md:text-3xl text-charcoal font-montserrat">SHONCI</h1>
                  <p className="text-xs md:text-sm font-lato text-charcoal/80">Stylist based in Los Angeles, CA</p>
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
                  
                  <Link href="/" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">Home</Link>
                  
                  <Link href="/#about" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">About</Link>
                  
                  <Link href="/#services" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">Styling Services</Link>
                  
                  <Link href="/#packages" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">Packages</Link>
                  
                  <Link href="/#booking" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">Book Now</Link>
                  
                  <Link href="/faq" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">FAQs</Link>
                  
                  <Link href="/#contact" className="text-charcoal hover:text-accent text-sm font-lato tracking-widest transition-colors duration-300">Contact</Link>
                </div>
              </div>
              
              {/* Mobile Navigation Menu */}
              {isMenuOpen && (
                <div className="md:hidden border-t border-charcoal/20 py-4">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      href="/" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/#about" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/#services" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Styling Services
                    </Link>
                    <Link 
                      href="/#packages" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Packages
                    </Link>
                    <Link 
                      href="/#booking" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Now
                    </Link>
                    <Link 
                      href="/faq" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQs
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="text-charcoal hover:text-accent text-sm font-lato uppercase tracking-widest transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
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
