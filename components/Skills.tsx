const labSkills = [
  "LC-MS/MS",
  "Immunoassay Platforms",
  "Automated Laboratory Systems",
  "Clinical Test Development",
  "Endocrinology Testing",
  "Toxicology Screening",
  "Therapeutic Drug Monitoring",
  "Metals Analysis",
  "[Additional lab skill — placeholder]",
];

const clinicalSkills = [
  "Patient-Centered Care",
  "Clinical Research",
  "Medical Communication",
  "Translational Medicine",
  "Laboratory Medicine",
  "[Additional clinical skill — placeholder]",
];

const softSkills = [
  "Scientific Communication",
  "Cross-disciplinary Collaboration",
  "Technical Writing",
  "Public Presentation",
  "Critical Thinking",
  "Adaptability",
  "[Additional skill — placeholder]",
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
    title: "Communication & Leadership",
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

        {/* Languages placeholder */}
        <div className="mt-8 p-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Languages</p>
          <p className="text-slate-400 text-sm italic">[Placeholder — add languages spoken and proficiency levels]</p>
        </div>
      </div>
    </section>
  );
}
