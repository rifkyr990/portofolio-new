import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" data-reveal className="pb-20 pt-16 section-reveal">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">Featured Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Project Experience</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#14173f]/90 p-6 transition hover:-translate-y-1 hover:bg-[#1a2053]/95">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#36ADA3]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#36ADA3]">
                  {project.title}
                </span>
                <div className="text-xs text-white/50">Featured</div>
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/70">{project.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {project.contributions.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#36ADA3]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full border border-[#36ADA3]/30 bg-[#36ADA3]/10 px-4 py-2 text-[#36ADA3] transition hover:bg-[#36ADA3]/20">
                  Live Demo
                </a>
                <a href={project.repo} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10">
                  Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
