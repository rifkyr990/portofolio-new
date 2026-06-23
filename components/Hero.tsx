import Image from "next/image";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="home" data-reveal className="relative overflow-hidden pt-32 pb-32 section-reveal">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#36ADA3]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#2F578A]/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-[#36ADA3]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#36ADA3]/30 bg-[#36ADA3]/10 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#36ADA3] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#36ADA3] font-semibold">Available for Work</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="max-w-2xl text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
                Building digital<br />
                <span className="bg-gradient-to-r from-[#36ADA3] via-[#5ac3d6] to-[#36ADA3] bg-clip-text text-transparent">
                  experiences
                </span>
                {" "}that matter.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                {profile.summary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#36ADA3] to-[#2F9B91] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#36ADA3]/40 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#36ADA3]/80 to-[#2F9B91]/80 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-[#36ADA3] hover:bg-[#36ADA3]/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-[#36ADA3]">1+</p>
                <p className="text-sm text-white/60 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#36ADA3]">10+</p>
                <p className="text-sm text-white/60 mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#36ADA3]">100%</p>
                <p className="text-sm text-white/60 mt-1">Client Satisfied</p>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#36ADA3]/20 to-[#2F578A]/20 rounded-[2.5rem] blur-2xl" />
            <div className="relative z-10 h-full rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/2 overflow-hidden shadow-[0_50px_120px_-60px_rgba(54,173,163,0.2)] backdrop-blur-xl">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121358]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
