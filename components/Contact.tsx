import { Mail, MapPin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
          Get In Touch
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Let&apos;s Connect
        </h2>
        <div className="section-divider mx-auto" />
        <p className="text-slate-500 leading-relaxed mt-4 mb-10 max-w-lg mx-auto">
          I&apos;m always happy to connect with fellow students, researchers, physicians, and anyone
          passionate about medicine and science communication. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
          <a
            href="https://www.linkedin.com/in/reb-mamm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">LinkedIn</p>
              <p className="text-slate-900 font-medium text-sm group-hover:text-blue-700 transition-colors">
                linkedin.com/in/reb-mamm
              </p>
            </div>
          </a>

          <a
            href="mailto:[your.email@example.com]"
            className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Email</p>
              <p className="text-slate-900 font-medium text-sm group-hover:text-blue-700 transition-colors">
                [your.email@example.com — placeholder]
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Location</p>
              <p className="text-slate-900 font-medium text-sm">Greater Chicago Area</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">Resume / CV</p>
              <p className="text-slate-900 font-medium text-sm group-hover:text-blue-700 transition-colors">
                Download PDF — [placeholder]
              </p>
            </div>
          </a>
        </div>

        {/* Social placeholder */}
        <div className="p-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/40 text-left">
          <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-1">Additional Links</p>
          <p className="text-slate-400 text-sm italic">
            [Placeholder — add any additional social media, GitHub, or professional links]
          </p>
        </div>
      </div>
    </section>
  );
}
