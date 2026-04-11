const labSkills = [
  "LC-MS/MS",
  "GC-MS",
  "H-NMR",
  "IR Spectroscopy",
  "Immunoassay Platforms",
  "Automated Laboratory Systems",
  "Western Blot",
  "Cell Culturing & Sterilization",
  "Microfluidics",
  "Autoclave Operation",
  "Pre-analytical Procedures",
  "Specimen Processing",
];

const clinicalSkills = [
  "Clinical Test Development",
  "Translational Research",
  "Endocrinology Testing",
  "Immunology",
  "Toxicology Screening",
  "Therapeutic Drug Monitoring",
  "Metals Analysis",
  "Patient-Centered Care",
  "Emergency Medicine (Shadowing)",
  "Differential Diagnosis",
];

const softSkills = [
  "Scientific Communication",
  "Academic Tutoring & Mentorship",
  "Cross-disciplinary Collaboration",
  "Technical Writing",
  "Public Presentation",
  "MS Office Suite",
  "Google Suite",
  "CPR Certified",
];

const languages = [
  { lang: "English", level: "Native" },
  { lang: "Malayalam", level: "Fluent" },
  { lang: "Latin", level: "Seal of Biliteracy" },
];

const categories = [
  {
    title: "Laboratory & Technical",
    skills: labSkills,
    dot: "bg-blue-400",
    border: "border-blue-100",
    bg: "bg-blue-50",
    header: "text-blue-700",
  },
  {
    title: "Clinical & Research",
    skills: clinicalSkills,
    dot: "bg-sky-400",
    border: "border-sky-100",
    bg: "bg-sky-50",
    header: "text-sky-700",
  },
  {
    title: "Communication & Productivity",
    skills: softSkills,
    dot: "bg-violet-400",
    border: "border-violet-100",
    bg: "bg-violet-50",
    header: "text-violet-700",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Competencies
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Skills & Expertise
        </h2>
        <div className="section-divider mx-auto" />

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl border p-6 ${cat.border} ${cat.bg}`}
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 ${cat.header}`}>
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cat.dot}`} />
                    <span className="text-slate-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-8 p-6 rounded-2xl border border-slate-200 bg-slate-50">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Languages</p>
          <div className="flex flex-wrap gap-3">
            {languages.map((l) => (
              <div key={l.lang} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                <span className="text-slate-900 font-medium text-sm">{l.lang}</span>
                <span className="text-slate-400 text-xs">·</span>
                <span className="text-blue-600 text-xs font-medium">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
