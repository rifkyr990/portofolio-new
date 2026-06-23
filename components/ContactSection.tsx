import { contact } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" data-reveal className="pb-20 pt-16 section-reveal">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">Contact</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something great together.</h2>
            <p className="max-w-xl leading-8 text-white/75">{contact.message}</p>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0d1032]/90 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#36ADA3]/15 text-[#36ADA3]">@</span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-white/70 hover:text-white">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0d1032]/90 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#36ADA3]/15 text-[#36ADA3]">GH</span>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <a href={contact.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                    github.com/rifkyramadhan
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0d1032]/90 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#36ADA3]/15 text-[#36ADA3]">IN</span>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                    linkedin.com/in/rifky-ramadhan
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0d1032]/90 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#36ADA3]/15 text-[#36ADA3]">WA</span>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                    Start chat now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#14173f]/90 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.55)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#36ADA3]">Contact Form</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Leave me a short message</h3>
            <form className="mt-6 space-y-4">
              <label className="block text-sm text-white/70">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d1032] px-4 py-3 text-white outline-none transition focus:border-[#36ADA3]"
                />
              </label>
              <label className="block text-sm text-white/70">
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d1032] px-4 py-3 text-white outline-none transition focus:border-[#36ADA3]"
                />
              </label>
              <label className="block text-sm text-white/70">
                Message
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d1032] px-4 py-3 text-white outline-none transition focus:border-[#36ADA3]"
                />
              </label>
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#36ADA3] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
