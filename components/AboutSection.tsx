import { profile, stats } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" data-reveal className="space-y-10 pb-20 pt-16 section-reveal">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">About Me</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Career Summary & Expertise</h2>
            <p className="max-w-2xl leading-8 text-white/75">
              {profile.subtitle} {profile.summary}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#0d1032]/90 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)]">
            <h3 className="text-xl font-semibold text-white">Professional Goals</h3>
            <p className="mt-4 leading-8 text-white/70">
              I focus on delivering reliable, scalable solutions that are easy to maintain and grow with a team. Attention to detail and strong collaboration help me build lasting digital products.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-white/75">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#36ADA3]" />
                Build robust backend APIs and architecture.
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#36ADA3]" />
                Design intuitive user interfaces with strong performance.
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#36ADA3]" />
                Optimize database systems and business workflows.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
