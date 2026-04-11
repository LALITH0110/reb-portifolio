import { Heart, Microscope, BookOpen } from "lucide-react";

export default function About() {
  const facts = [
    {
      icon: <Microscope size={20} className="text-blue-500" />,
      label: "Research Focus",
      value: "Clinical laboratory science, immunology, endocrinology",
    },
    {
      icon: <Heart size={20} className="text-rose-400" />,
      label: "Driven By",
      value: "Patient-centered care and evidence-based medicine",
    },
    {
      icon: <BookOpen size={20} className="text-sky-500" />,
      label: "Next Step",
      value: "Medical school at LECOM",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
            <h2
              className="text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Hello, I&apos;m Rebecca
            </h2>
            <div className="section-divider" />

            <p className="text-slate-600 leading-relaxed mb-5">
              I&apos;m a pre-medical biology student at Illinois Institute of Technology (graduating May 2026),
              and an incoming medical student at LECOM. My academic journey has been shaped by a
              deep curiosity about how science can transform patient outcomes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              From hands-on laboratory research at Mayo Clinic using LC-MS/MS and immunoassay platforms,
              to innovating assistive technology through Illinois Tech&apos;s IPRO program, I seek opportunities
              that combine rigorous science with meaningful human impact.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Outside the lab and classroom, I care deeply about community, mentorship, and making
              medicine more accessible and communicable to everyone.
            </p>

            {/* Fun facts placeholder */}
            <div className="mt-8 p-4 rounded-xl border border-dashed border-blue-200 bg-blue-50/40">
              <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-1">Personal Fun Facts</p>
              <p className="text-slate-400 text-sm italic">[Placeholder — add 2–3 personal fun facts here]</p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5">{f.label}</p>
                  <p className="text-slate-800 font-medium text-sm">{f.value}</p>
                </div>
              </div>
            ))}

            {/* Quote / statement placeholder */}
            <div className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
              <p className="text-sm font-light leading-relaxed italic">
                &ldquo;[Placeholder — add a personal statement or quote that reflects your philosophy about medicine and communication]&rdquo;
              </p>
              <p className="text-blue-100 text-xs mt-3">— Rebecca Mammarappallil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
