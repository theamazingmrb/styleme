"use client";

import { useEffect, useState, useRef } from "react";
import { FaShoppingBag, FaTshirt, FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill: {
          name: string;
          email: string;
          customAnswers: {
            a1: string;
          };
        };
        utm: Record<string, string>;
        branding: {
          color: string;
          textColor: string;
          primaryColor: string;
        };
      }) => void;
    };
  }
}

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const calendlyRef = useRef<HTMLDivElement>(null);

  // // Show email popup after a short delay, but only if user hasn't submitted before
  // useEffect(() => {
  //   // Check if user has already submitted email
  //   const hasSubmitted = localStorage.getItem('emailSubmitted') === 'true';

  //   if (!hasSubmitted) {
  //     const timer = setTimeout(() => {
  //       setShowEmailPopup(true);
  //     }, 3000); // Show popup after 3 seconds

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // Initialize Calendly widget when component mounts
  useEffect(() => {
    // Add Calendly script to the page
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("type", "text/javascript");
    script.async = true;
    head?.appendChild(script);

    return () => {
      // Clean up
      if (head?.contains(script)) {
        head.removeChild(script);
      }
    };
  }, []);

  // Initialize or update Calendly when selectedPackage changes
  // Initialize or update Calendly when selectedPackage changes
  useEffect(() => {
    if (showCalendly && selectedPackage) {
      // Clear any existing Calendly instance
      if (calendlyRef.current) {
        if (calendlyRef.current.innerHTML !== '') {
          calendlyRef.current.innerHTML = '';
        }

        // Remove any existing package notes
        const existingNotes = document.querySelectorAll('.package-note');
        existingNotes.forEach(note => note.remove());

        // Wait for Calendly to be available
        const initializeCalendly = () => {
          if (window.Calendly && calendlyRef.current) {
            // Using the provided Calendly link for all packages
            // In a production environment, you might want different links for each package
            // Update the Calendly initialization
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/billie-heidelberg-jr/30min',
              parentElement: calendlyRef.current,
              prefill: {
                name: '',
                email: '',
                customAnswers: {
                  a1: `Package: ${selectedPackage}`
                }
              },
              utm: {} as Record<string, string>, // Properly type the empty object
              branding: {
                color: '#4f46e5',
                textColor: '#ffffff',
                primaryColor: '#4f46e5'
              }
            });

            // Add a small note about the selected package above the Calendly widget
            const packageNote = document.createElement('div');
            packageNote.className = 'mb-4 p-3 bg-indigo-50 text-indigo-700 rounded-md text-center package-note';
            packageNote.innerHTML = `<strong>Selected Package:</strong> ${selectedPackage.replace(/'/g, '&apos;')}`;
            if (calendlyRef.current && calendlyRef.current.parentNode) {
              calendlyRef.current.parentNode.insertBefore(packageNote, calendlyRef.current);
            }
          } else {
            setTimeout(initializeCalendly, 100);
          }
        };

        initializeCalendly();
      }
    }
  }, [showCalendly, selectedPackage]);
  const handleBooking = (packageType: string) => {
    setSelectedPackage(packageType);
    setShowCalendly(true);

    // Scroll to booking section
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleEmailSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Here you would typically send the email to your backend or email service
  //   console.log('Email submitted:', email);
  //   setShowEmailPopup(false);
  //   // You could store this in localStorage to prevent showing the popup again
  //   localStorage.setItem('emailSubmitted', 'true');
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Email Collection Popup */}
      {false && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-xl w-full bg-transparent overflow-hidden">
            {/* Close button */}
            <button
              // onClick={() => setShowEmailPopup(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              {/* Background image - using the exact image from reference */}
              <div className="absolute inset-0 bg-[#a08977]">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                  alt="Clothes on a rack"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content overlay */}
              <div className="relative p-10 flex flex-col items-center text-white">
                <h2 className="text-4xl font-lato font-bold mb-4 text-center leading-tight">
                  Want to Elevate Your<br />Outfits Effortlessly?
                </h2>

                <p className="text-base mb-8 text-center max-w-md">
                  Get my FREE guide with 3 golden rules—simple, timeless tricks French women swear by—to transform your everyday outfits with ease.
                </p>

                <a href="#booking" className="px-6 py-3 bg-yellow-400 text-white font-lato font-bold hover:bg-yellow-500 transition-colors">
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>
            {/* Background image with text overlay */}

          </div>
        </div>
      )}



      {/* Hero Section - Fashion Style */}
      <div className="relative bg-white fashion-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="sm:text-center lg:col-span-6 lg:text-left animate-fadeIn">
              <h1 className="font-lato md:hidden">
                <span className="text-center font-bold block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight">Curated Luxury</span>
                <span className="text-center font-bold block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight">Discover your Perfect Look</span>
              </h1>
              <h1 className="font-lato hidden md:block">
                <span className="text-center font-bold block text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-charcoal leading-tight whitespace-nowrap overflow-visible">Curated Luxury Discover your Perfect Look</span>
              </h1>
              {/* <p className="mt-6 text-lg text-charcoal font-lato font-light leading-relaxed">
                Get personalized recommendations on apparel and clothing from our expert stylists. Discover your perfect look and where to find it.
              </p> */}
              {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking"
                  className="btn-fashion btn-fashion-primary uppercase tracking-widest text-sm"
                >
                  Book Your Consultation
                </a>
                <a
                  href="#services"
                  className="btn-fashion btn-fashion-outline uppercase tracking-widest text-sm"
                >
                  Explore Services
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto">
          <div className="relative overflow-hidden">
            <div className="absolute -inset-4 bg-accent/10 rounded-tr-3xl rounded-bl-3xl transform rotate-6"></div>
            <div className="relative overflow-hidden border-8 border-white shadow-xl">
              <video
                src="/videos/video.mp4"
                controls
                autoPlay
                muted
                loop
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Fashion Style */}
      <section id="services" className="fashion-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            </div>
            <h2 className="font-lato text-xl md:text-2xl lg:text-3xl text-charcoal">Services</h2>
            <p className="text-xl font-light text-accent font-lato italic">
              Expert Style Guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="fashion-card p-8 hover-lift animate-fadeIn delay-100">
              <div className="mb-6 w-16 h-16 flex items-center justify-center bg-white border border-accent/20 rounded-full">
                <FaShoppingBag className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-lato font-semibold text-charcoal mb-4">Shopping Assistance</h3>
              <div className="w-10 h-0.5 bg-accent mb-4"></div>
              <p className="text-charcoal/70 font-lato">
                Get recommendations on where to shop for quality peices that match your aesthetic and style needs
              </p>
              <div className="mt-6">
                <a href="#booking" className="text-accent font-lato text-sm uppercase tracking-wider flex items-center hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="fashion-card p-8 hover-lift animate-fadeIn delay-200">
              <div className="mb-6 w-16 h-16 flex items-center justify-center bg-white border border-accent/20 rounded-full">
                <FaTshirt className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-lato font-semibold text-charcoal mb-4">Wardrobe Analysis</h3>
              <div className="w-10 h-0.5 bg-accent mb-4"></div>
              <p className="text-charcoal/70 font-lato">
                Assessment of your current wardrobe and identification of key pieces to add for maximum versatility that will transform your closet into a curated collection that truly represent your style
              </p>
              <div className="mt-6">
                <a href="#booking" className="text-accent font-lato text-sm uppercase tracking-wider flex items-center hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="fashion-card p-8 hover-lift animate-fadeIn delay-300">
              <div className="mb-6 w-16 h-16 flex items-center justify-center bg-white border border-accent/20 rounded-full">
                <FaCalendarAlt className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-lato font-semibold text-charcoal mb-4">Seasonal Updates</h3>
              <div className="w-10 h-0.5 bg-accent mb-4"></div>
              <p className="text-charcoal/70 font-lato">
              Stay current with season trends and learn how to incorporate them into your personal style while maintaining your unique aesthetic
              </p>
              <div className="mt-6">
                <a href="#booking" className="text-accent font-lato text-sm uppercase tracking-wider flex items-center hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section - Fashion Style */}
      <section id="packages" className="fashion-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            </div>
            <h2 className="font-lato text-4xl md:text-5xl text-charcoal mb-3">Style Packages</h2>
            <p className="text-2xl font-light text-accent font-lato italic">
              Choose Your Style Journey
            </p>
            <p className="mt-6 max-w-2xl text-lg text-charcoal/80 mx-auto font-lato font-light leading-relaxed">
              Select the package that best fits your style needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Basic Package */}
            <div className="bg-white border border-gray-200 hover:border-accent transition-all duration-300 flex flex-col animate-fadeIn delay-100">
              <div className="bg-beige/30 p-6 text-center">
                <h3 className="font-lato text-2xl text-charcoal">Basic Consultation</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-lato font-light text-accent">$99</span>
                  <span className="ml-1 text-lg font-lato text-charcoal/70">/session</span>
                </div>
              </div>

              <div className="flex-1 p-8">
                <p className="text-center font-lato text-charcoal/80 mb-8 italic">
                  Perfect for those looking for quick style advice.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">60-minute virtual consultation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">Basic style assessment</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">3 outfit recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleBooking("Basic Consultation")}
                  className="w-full btn-fashion btn-fashion-outline uppercase tracking-widest text-sm"
                >
                  Book Basic Package
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white border-2 border-accent shadow-xl flex flex-col relative animate-fadeIn delay-200 transform -translate-y-4">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="bg-accent text-white text-xs uppercase tracking-widest py-1 px-4 font-lato">
                  Most Popular
                </div>
              </div>

              <div className="bg-accent/10 p-6 text-center">
                <h3 className="font-lato text-2xl text-charcoal">Premium Consultation</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-lato font-light text-accent">$199</span>
                  <span className="ml-1 text-lg font-lato text-charcoal/70">/session</span>
                </div>
              </div>

              <div className="flex-1 p-8">
                <p className="text-center font-lato text-charcoal/80 mb-8 italic">
                  Our most popular package for comprehensive style advice.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">90-minute consultation (virtual or in-person)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">Detailed style profile</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">5 outfit recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">Shopping guide with store recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleBooking("Premium Consultation")}
                  className="w-full btn-fashion btn-fashion-primary uppercase tracking-widest text-sm"
                >
                  Book Premium Package
                </button>
              </div>
            </div>

            {/* VIP Package */}
            <div className="bg-white border border-beige hover:border-accent transition-all duration-300 flex flex-col animate-fadeIn delay-300">
              <div className="bg-beige/30 p-6 text-center">
                <h3 className="font-lato text-2xl text-charcoal">VIP Style Experience</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-lato font-light text-accent">$399</span>
                  <span className="ml-1 text-lg font-lato text-charcoal/70">/session</span>
                </div>
              </div>

              <div className="flex-1 p-8">
                <p className="text-center font-lato text-charcoal/80 mb-8 italic">
                  The ultimate style transformation experience.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato"> 3-hour consultation (virtual or in-person) </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">Complete wardrobe analysis</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">10 outfit recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">Personal shopping assistant (2 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="flex-shrink-0 w-5 h-5 text-accent mt-0.5" />
                    <span className="ml-3 text-charcoal/70 font-lato">30-day follow-up support</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleBooking("VIP Style Experience")}
                  className="w-full btn-fashion btn-fashion-outline uppercase tracking-widest text-sm"
                >
                  Book VIP Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section with Calendly - Fashion Style */}
      <section id="booking" className="fashion-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            </div>
            <h2 className="font-lato text-4xl md:text-5xl text-charcoal mb-3">Book Your Session</h2>
            <p className="text-2xl font-light text-accent font-lato italic">
              Schedule Your Consultation
            </p>
            <p className="mt-6 max-w-2xl text-lg text-charcoal/80 mx-auto font-lato font-light leading-relaxed">
              Choose a time that works for you and let&apos;s start your style journey.
            </p>
          </div>

          {!showCalendly ? (
            <div className="text-center py-10 animate-fadeIn">
              <p className="text-xl font-lato text-charcoal/80 mb-10 italic">Select a package to schedule your consultation</p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button
                  onClick={() => handleBooking("Basic Consultation")}
                  className="btn-fashion btn-fashion-outline uppercase tracking-widest text-sm hover-lift"
                >
                  Basic Consultation
                </button>
                <button
                  onClick={() => handleBooking("Premium Consultation")}
                  className="btn-fashion btn-fashion-primary uppercase tracking-widest text-sm hover-lift"
                >
                  Premium Consultation
                </button>
                <button
                  onClick={() => handleBooking("VIP Style Experience")}
                  className="btn-fashion btn-fashion-outline uppercase tracking-widest text-sm hover-lift"
                >
                  VIP Experience
                </button>
              </div>
            </div>
          ) : (
            <div className="relative animate-fadeIn bg-cream/50 p-8 border border-beige">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-lato text-2xl text-accent">
                  {selectedPackage}
                </h3>
                <button
                  onClick={() => {
                    setShowCalendly(false);
                    setSelectedPackage(""); // Reset the selected package
                    // Remove any existing package notes when closing
                    const existingNotes = document.querySelectorAll('.package-note');
                    existingNotes.forEach(note => note.remove());

                    // Clear the Calendly widget
                    if (calendlyRef.current) {
                      calendlyRef.current.innerHTML = '';
                    }
                  }}
                  className="text-accent hover:text-charcoal flex items-center transition-colors duration-300 font-lato text-sm uppercase tracking-wider"
                  aria-label="Close booking panel"
                >
                  <FaTimes className="h-4 w-4 mr-2" />
                  <span>Close</span>
                </button>
              </div>

              {/* Elegant border for Calendly widget */}
              <div className="border border-accent/20 bg-white shadow-lg">
                {/* Calendly inline widget with V2 API */}
                <div
                  ref={calendlyRef}
                  className="calendly-inline-widget"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-lato text-2xl text-white mb-6"><span className="font-montserrat">SHONCI</span></h3>
            <h3 className="font-lato text-xl text-charcoal mb-2"><span className="font-montserrat">SHONCI</span></h3>
            <p className="text-cream/80 font-lato font-light leading-relaxed">
              Style elevation through personalized recommendations.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-lato uppercase tracking-widest text-accent text-sm mb-6">Connect</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-cream hover:text-accent transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-cream hover:text-accent transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-lato uppercase tracking-widest text-accent text-sm mb-6">Contact</h4>
            <div className="text-cream/80 font-lato text-sm mb-2">style@shonci.com</div>
            <div className="text-cream/80 font-lato text-sm mb-2">(555) 123-4567</div>
            <div className="text-cream/60 font-lato text-xs mt-6">&copy; {new Date().getFullYear()} <span className="font-montserrat">SHONCI</span>.<br />All rights reserved.</div>
          </div>
        </div>
      </div>

    </div>
  );
}
