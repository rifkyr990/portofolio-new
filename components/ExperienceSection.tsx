import { experience } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" data-reveal className="pb-20 pt-16 section-reveal">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">Experience Timeline</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Career History</h2>
        </div>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.role} className="relative rounded-[2rem] border border-white/10 bg-[#14173f]/90 p-6 pl-10 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.6)]">
              <span className="absolute left-0 top-8 flex h-4 w-4 items-center justify-center rounded-full bg-[#36ADA3] shadow-xl" />
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#36ADA3]">{item.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                </div>
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/70">{item.duration}</span>
              </div>
              <ul className="mt-5 space-y-3 text-white/75">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#36ADA3]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
