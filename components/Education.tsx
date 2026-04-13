import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Lake Erie College of Osteopathic Medicine (LECOM)",
    degree: "Doctor of Osteopathic Medicine (D.O.)",
    period: "2026 – 2030 (Expected)",
    location: "Erie, PA",
    details: [
      "Incoming osteopathic medical student",
      "Focus: Pediatric medicine",
    ],
    badge: "Incoming",
    badgeColor: "bg-emerald-100 text-emerald-700",
    current: true,
  },
  {
    school: "Illinois Institute of Technology",
    degree: "B.S. Biology — Minors in Psychology & Pre-Medical Studies",
    period: "Aug 2022 – May 2026",
    location: "Chicago, IL",
    details: [
      "Dean's List — multiple semesters",
      "Congress of Future Medical Leaders Award of Excellence nominee (May 2022)",
      "IPRO interdisciplinary project program",
      "Hawk Ambassador & Lead Ambassador — Office of Undergraduate Admissions",
    ],
    badge: "May 2026",
    badgeColor: "bg-blue-100 text-blue-700",
    current: false,
  },
];

const awards = [
  {
    title: "Dean's List",
    org: "Illinois Institute of Technology",
    year: "Multiple Semesters",
    desc: "Recognized for academic excellence across multiple semesters at Illinois Tech.",
  },
  {
    title: "Congress of Future Medical Leaders — Award of Excellence",
    org: "National Academy of Future Physicians and Medical Scientists",
    year: "May 2022",
    desc: "Nominated for the Award of Excellence recognizing exceptional promise in the medical field.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">Academic Path</p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Education
        </h2>
        <div className="section-divider mx-auto" />

        <div className="mt-10 flex flex-col gap-6">
          {education.map((e) => (
            <div
              key={e.school}
              className={`relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow ${
                e.current ? "border-blue-200 ring-1 ring-blue-100" : "border-slate-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-slate-900">{e.school}</h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${e.badgeColor}`}>{e.badge}</span>
                    </div>
                    <p className="text-blue-700 font-medium text-sm mb-1">{e.degree}</p>
                    <p className="text-slate-400 text-xs">{e.location}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium whitespace-nowrap">{e.period}</p>
              </div>
              <ul className="mt-4 flex flex-col gap-1.5 pl-4">
                {e.details.map((d, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-16">
          <h3
            className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <Award size={22} className="text-amber-500" />
            Awards & Recognition
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {awards.map((a) => (
              <div
                key={a.title}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <p className="text-xs text-amber-600 font-medium uppercase tracking-wide">{a.year}</p>
                </div>
                <h4 className="font-semibold text-slate-900 mb-0.5 text-sm leading-snug">{a.title}</h4>
                <p className="text-blue-600 text-xs font-medium mb-2">{a.org}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
