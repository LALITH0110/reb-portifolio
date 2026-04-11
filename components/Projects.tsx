import { ExternalLink, Bike, FlaskConical, Presentation } from "lucide-react";

const projects = [
  {
    title: "Pedal to the Future",
    subtitle: "IPRO Interdisciplinary Innovation Project",
    org: "Illinois Institute of Technology — Kaplan Institute",
    period: "2024 – 2025",
    icon: <Bike size={22} className="text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-100",
    tags: ["Assistive Technology", "Biomedical Design", "IPRO", "Innovation Day"],
    description:
      "Designed and developed an adaptive cushion attachment for bicycles that gently holds the rider's legs apart in a comfortable, stable position — engineered to assist individuals with mobility limitations. The product was presented at Illinois Tech's Innovation Day.",
    outcome:
      "Won both the Audience Choice Award and the Dean's Prize at Illinois Tech Innovation Day 2024, selected as one of the two top-scoring teams out of 60 industry judges.",
    link: null,
  },
  {
    title: "Clinical Test Development Research",
    subtitle: "Summer Lab Science Program",
    org: "Mayo Clinic — TRITDO",
    period: "Summer 2025",
    icon: <FlaskConical size={22} className="text-sky-600" />,
    iconBg: "bg-sky-50 border-sky-100",
    tags: ["LC-MS/MS", "Immunoassay", "Clinical Research", "Laboratory Medicine"],
    description:
      "Assisted with clinical laboratory test development using advanced platforms including liquid chromatography-tandem mass spectrometry (LC-MS/MS), automated systems, and immunoassay platforms within the Translational Research, Innovation, and Test Development Office.",
    outcome:
      "Gained expertise across multiple clinical domains including endocrinology, immunology, toxicology, therapeutic drug monitoring, and metals testing.",
    link: null,
  },
  {
    title: "[Project Title — Placeholder]",
    subtitle: "[Subtitle or Course / Program]",
    org: "[Organization / Course]",
    period: "[Dates]",
    icon: <Presentation size={22} className="text-violet-500" />,
    iconBg: "bg-violet-50 border-violet-100",
    tags: ["[Tag 1]", "[Tag 2]", "[Tag 3]"],
    description:
      "[Add a third project here — this could be a research paper, community initiative, academic project, or communication artifact relevant to the Distinguished Communicator Medal Program.]",
    outcome: "[Key result, recognition, or learning outcome]",
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Featured Work
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Projects
        </h2>
        <div className="section-divider mx-auto" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-md hover:border-blue-200 transition-all group"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${p.iconBg}`}>
                {p.icon}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-0.5">{p.title}</h3>
              <p className="text-blue-600 text-xs font-medium mb-1">{p.subtitle}</p>
              <p className="text-slate-400 text-xs mb-3">
                {p.org} · {p.period}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              {/* Outcome */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 mb-4">
                <p className="text-xs text-emerald-700 font-medium uppercase tracking-wide mb-0.5">Outcome</p>
                <p className="text-slate-700 text-xs leading-relaxed">{p.outcome}</p>
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-medium hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={13} />
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
