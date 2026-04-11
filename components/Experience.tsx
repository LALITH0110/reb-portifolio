import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Summer Lab Science Program Intern",
    org: "Mayo Clinic — TRITDO",
    location: "Rochester, MN",
    period: "Summer 2025",
    type: "Clinical Research",
    typeColor: "bg-blue-100 text-blue-700",
    description:
      "Worked within the Translational Research, Innovation, and Test Development Office (TRITDO), gaining firsthand experience with clinical test development and cutting-edge laboratory platforms.",
    highlights: [
      "Operated LC-MS/MS, automated systems, and immunoassay platforms",
      "Contributed to projects across endocrinology, immunology, toxicology, therapeutic drug monitoring, and metals",
      "Mentored by world-class experts in clinical laboratory medicine",
      "Developed both technical skills and appreciation for collaborative, translational healthcare",
    ],
    logo: "MC",
    logoBg: "bg-blue-600",
  },
  {
    role: "Research / Volunteer Position",
    org: "Ann & Robert H. Lurie Children's Hospital of Chicago",
    location: "Chicago, IL",
    period: "[Dates — Placeholder]",
    type: "Pediatric Healthcare",
    typeColor: "bg-rose-100 text-rose-700",
    description:
      "[Add your role description here — what did you do, what did you learn, and what impact did you have at Lurie Children's?]",
    highlights: [
      "[Responsibility / achievement — placeholder]",
      "[Responsibility / achievement — placeholder]",
      "[Responsibility / achievement — placeholder]",
    ],
    logo: "LC",
    logoBg: "bg-rose-500",
  },
  {
    role: "[Position Title — Placeholder]",
    org: "Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Aug 2023 – Dec 2024",
    type: "Academic / Campus",
    typeColor: "bg-slate-100 text-slate-600",
    description:
      "[Add details about your role at Illinois Tech — teaching assistant, research lab, student organization leadership, etc.]",
    highlights: [
      "[Responsibility / achievement — placeholder]",
      "[Responsibility / achievement — placeholder]",
    ],
    logo: "IT",
    logoBg: "bg-slate-700",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Where I&apos;ve Worked
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Experience
        </h2>
        <div className="section-divider mx-auto" />

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center text-white text-xs font-bold shadow-md z-10"
                  style={{ background: exp.logoBg.replace("bg-", "") }}
                >
                  <div className={`w-10 h-10 rounded-full ${exp.logoBg} flex items-center justify-center text-white text-xs font-bold`}>
                    {exp.logo}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${exp.typeColor}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-blue-700 font-medium text-sm">{exp.org}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-slate-400 text-xs whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
