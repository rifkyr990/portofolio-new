export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d1032]/90 py-8 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">© 2026 Rifky Ramadhan. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
