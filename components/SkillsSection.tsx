import { skills } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" data-reveal className="pb-20 pt-16 section-reveal">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Technical Expertise</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.category} className="rounded-[1.75rem] border border-white/10 bg-[#14173f]/90 p-6 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.6)]">
              <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              <div className="mt-5 space-y-3">
                {skill.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
