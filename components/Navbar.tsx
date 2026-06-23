"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-5xl px-4 sm:px-6 transition-all duration-500 ${
            scrolled ? "max-w-5xl" : "max-w-6xl"
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              scrolled
                ? "border border-white/[0.08] bg-[#121358]/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="group relative flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#36ADA3] to-[#2F578A] transition-transform duration-300 group-hover:scale-110">
                <span className="text-sm font-bold text-white">R</span>
              </div>
              <span className="text-sm font-semibold tracking-[0.15em] text-white/90 transition-colors duration-300 group-hover:text-white">
                RIFKY
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 sm:flex">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-xl px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-[#36ADA3]"
                        : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {/* Active pill background */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-[#36ADA3]/10 border border-[#36ADA3]/20" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-xl bg-gradient-to-r from-[#36ADA3] to-[#2F9B91] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#36ADA3]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#36ADA3]/30 hover:scale-105 sm:inline-flex"
              >
                Let&apos;s Talk
              </a>

              {/* Hamburger */}
              <button
                type="button"
                aria-label="Toggle menu"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:hidden"
                onClick={() => setOpen((c) => !c)}
              >
                <div className="flex w-5 flex-col items-center gap-[5px]">
                  <span
                    className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                      open ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                      open ? "scale-x-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                      open ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] border-l border-white/[0.08] bg-[#0d1032]/95 backdrop-blur-2xl transition-transform duration-400 ease-out sm:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-8">
          <nav className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#36ADA3] bg-[#36ADA3]/10 border border-[#36ADA3]/20"
                      : "text-white/60 hover:text-white/90 hover:bg-white/5 border border-transparent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#36ADA3] to-[#2F9B91] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#36ADA3]/20 transition-all duration-300 hover:shadow-xl"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </a>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">RIFKY</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
