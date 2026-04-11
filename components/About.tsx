import { Heart, Microscope, BookOpen } from "lucide-react";

export default function About() {
  const facts = [
    {
      icon: <Microscope size={20} className="text-blue-500" />,
      label: "Research Focus",
      value: "Clinical laboratory science, microfluidics, immunology & endocrinology",
    },
    {
      icon: <Heart size={20} className="text-rose-400" />,
      label: "Career Goal",
      value: "Osteopathic physician specializing in pediatrics",
    },
    {
      icon: <BookOpen size={20} className="text-sky-500" />,
      label: "Next Step",
      value: "D.O. program at Lake Erie College of Osteopathic Medicine (LECOM)",
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
              with minors in Psychology and Pre-Medical Studies. I&apos;m an incoming D.O. student at LECOM,
              pursuing my lifelong goal of becoming an osteopathic physician in pediatrics.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              From clinical research at Mayo Clinic using LC-MS/MS and immunoassay platforms,
              to microfluidics research at the Bhushan Laboratory, to consulting on naturopathic
              approaches to coronary heart disease — I seek every opportunity to connect science
              with patient care.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Outside the lab, I mentor students as a tutor and Hawk Ambassador at Illinois Tech,
              and volunteer at Lurie Children&apos;s Hospital — where I get to remind myself every day
              why I chose this path.
            </p>

            {/* Fun facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Languages", value: "English, Malayalam" },
                { label: "Latin Seal", value: "Seal of Biliteracy" },
                { label: "Certified", value: "CPR Certified" },
                { label: "Location", value: "Tinley Park, IL" },
              ].map((f) => (
                <div key={f.label} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">{f.label}</p>
                  <p className="text-slate-800 text-sm font-medium mt-0.5">{f.value}</p>
                </div>
              ))}
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

            {/* Quote */}
            <div className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white">
              <p className="text-sm font-light leading-relaxed italic">
                &ldquo;Eager to contribute to scientific exploration and gain hands-on experience in biology —
                hoping to eventually excel as an osteopathic physician in the field of pediatrics.&rdquo;
              </p>
              <p className="text-blue-100 text-xs mt-3">— Rebecca Mammarappallil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
