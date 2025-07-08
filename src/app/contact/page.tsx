import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f8f5f0] px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-montserrat mb-6 text-charcoal">Contact Us</h2>
      <form className="w-full max-w-md bg-white/80 rounded-lg shadow p-8 flex flex-col gap-4">
        <label className="text-lg font-lato text-charcoal/80 mb-1" htmlFor="name">Contact Us</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="border border-charcoal/40 rounded px-4 py-3 font-lato text-base focus:outline-none focus:border-accent bg-transparent"
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="border border-charcoal/40 rounded px-4 py-3 font-lato text-base focus:outline-none focus:border-accent bg-transparent"
        />
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          className="border border-charcoal/40 rounded px-4 py-3 font-lato text-base focus:outline-none focus:border-accent bg-transparent"
        />
        <button
          type="submit"
          className="mt-4 bg-black text-white font-lato text-lg px-8 py-3 rounded hover:bg-[#222] transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
