import { Mail, ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-sky-50/60">
      {/* Decorative background rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-100/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-sky-100/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-blue-100/80" />
        <div className="absolute top-16 right-20 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-24 left-12 w-48 h-48 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Photo placeholder */}
        <div className="mx-auto mb-8 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
          <Image
            src="/profile_pic.jpeg"
            alt="Rebecca Mammarappallil"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Rebecca Mammarappallil
        </h1>

        <p className="text-slate-500 text-sm mb-2 tracking-wide">She / Her</p>

        <p className="text-xl text-slate-600 mb-2 font-light">
          B.S. Biology (Pre-Med) · Illinois Institute of Technology
        </p>

        <p className="text-base text-blue-600 font-medium mb-8">
          Incoming D.O. Student · LECOM
        </p>

        <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed mb-10">
          Passionate about medicine, clinical research, and patient advocacy. Bridging laboratory
          science and compassionate communication on the path to becoming an osteopathic physician
          in pediatrics.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/reb-mamm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a
            href="mailto:rebeccasusan2003@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-700 transition-all shadow-sm"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-700 transition-all shadow-sm"
          >
            <FileText size={16} />
            View Resume
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
