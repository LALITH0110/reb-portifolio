import { MapPin, Calendar } from "lucide-react";

const workExperience = [
  {
    role: "Student Consultant",
    org: "The Build Fellowship by Open Avenues — Dream Venture Labs",
    location: "Remote",
    period: "Sep 2025 – Nov 2025",
    type: "Consulting",
    typeColor: "bg-violet-100 text-violet-700",
    description:
      "Collaborated with a Medical Science Build Fellow at Dream Venture Labs on project-based consulting engagements addressing the naturopathic approach to coronary heart disease.",
    highlights: [
      "Developed deliverables demonstrating technical and professional skills",
      "Bridged clinical research with naturopathic medicine frameworks",
    ],
    logo: "BF",
    logoBg: "bg-violet-600",
  },
  {
    role: "Summer Lab Science Program Intern",
    org: "Translational Research, Innovation and Test Development Office (TRITDO) — Mayo Clinic",
    location: "Rochester, MN",
    period: "Jun 2025 – Aug 2025",
    type: "Clinical Research",
    typeColor: "bg-blue-100 text-blue-700",
    description:
      "Experienced the test development process within TRITDO, working alongside laboratory professionals to process patient specimens and observe high-complexity testing across multiple clinical domains.",
    highlights: [
      "Operated LC-MS/MS, automated systems, and immunoassay platforms",
      "Performed pre-analytical procedures and processed patient specimens",
      "Gained expertise in endocrinology, immunology, toxicology, therapeutic drug monitoring, and metals",
    ],
    logo: "MC",
    logoBg: "bg-blue-600",
  },
  {
    role: "Undergraduate Teaching Assistant — Microbiology Laboratory",
    org: "Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Jan 2025 – May 2025",
    type: "Academic",
    typeColor: "bg-slate-100 text-slate-600",
    description:
      "Supported faculty in the Microbiology Laboratory, creating media for student experiments and maintaining sterile conditions.",
    highlights: [
      "Prepared and maintained sterile environments for cell culturing",
      "Operated autoclave equipment for media decontamination per biosafety protocols",
      "Supported faculty in designing student-led microbiological experiments",
    ],
    logo: "IIT",
    logoBg: "bg-slate-700",
  },
  {
    role: "Student Tutor — Biology & Chemistry",
    org: "Academic Resource Center — Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Sep 2024 – Present",
    type: "Mentorship",
    typeColor: "bg-emerald-100 text-emerald-700",
    description:
      "Assisted fellow students in biology and chemistry, teaching new concepts to reinforce weekly lecture materials.",
    highlights: [
      "Tutored students in biology and chemistry",
      "Broke down complex concepts to support student understanding",
    ],
    logo: "ARC",
    logoBg: "bg-emerald-600",
  },
  {
    role: "Student Researcher — Microfluidics",
    org: "Bhushan Laboratory — Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "May 2024",
    type: "Research",
    typeColor: "bg-sky-100 text-sky-700",
    description:
      "Conducted hands-on research using equipment related to microfluidics, tissue engineering, biomanufacturing, and engineering approaches in drug discovery.",
    highlights: [
      "Operated microfluidics and tissue engineering equipment",
      "Explored biomanufacturing and drug discovery engineering approaches",
    ],
    logo: "BL",
    logoBg: "bg-sky-600",
  },
  {
    role: "Hawk Ambassador & Lead Ambassador",
    org: "Office of Undergraduate Admissions — Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "May 2023 – May 2026",
    type: "Leadership",
    typeColor: "bg-amber-100 text-amber-700",
    description:
      "Guided prospective students through the Illinois Tech experience and undergraduate application process as a Lead Ambassador.",
    highlights: [
      "Guided prospective students on pursuing their academic and career aspirations",
      "Represented Illinois Tech's programs and campus culture",
      "Supported students applying to undergraduate programs",
    ],
    logo: "HA",
    logoBg: "bg-amber-600",
  },
  {
    role: "Events Assistant",
    org: "Office of Undergraduate Admissions — Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Aug 2025 – Present · Part-time",
    type: "Leadership",
    typeColor: "bg-amber-100 text-amber-700",
    description:
      "Support the Undergraduate Admission team by helping plan and execute on-campus and off-campus events that engage and inform prospective students and their families.",
    highlights: [
      "Plan and execute on-campus and off-campus prospective student events",
      "Provides admission counseling support to prospective students and families",
      "Collaborates with student ambassadors on enrollment initiatives",
    ],
    logo: "EA",
    logoBg: "bg-amber-600",
  },
];

const volunteerExperience = [
  {
    role: "Children's Hospital Volunteer",
    org: "Ann & Robert H. Lurie Children's Hospital of Chicago",
    location: "Chicago, IL",
    period: "Sep 2025 – Present",
    highlights: [
      "Supported hospital staff with transporting supplies, restocking units, and maintaining a welcoming environment",
      "Engaged children in play, reading, and creative activities to promote emotional well-being during hospital stays",
    ],
  },
  {
    role: "Virtual Shadowing — Emergency Medicine",
    org: "University of Colorado School of Medicine",
    location: "Aurora, CO (Virtual)",
    period: "Nov 2022 – Dec 2022",
    highlights: [
      "Shadowed physicians in Emergency Room scenarios",
      "Obtained ROS (review of systems), assisted in developing patient diagnoses",
      "Observed physical and neurological exams, discussed differential diagnoses",
    ],
  },
  {
    role: "Hospital Volunteer",
    org: "Northwestern Medicine — Palos Hospital",
    location: "Palos Heights, IL",
    period: "Oct 2018 – Dec 2018",
    highlights: [
      "Greeted patients and visitors in the emergency room",
      "Guided visitors to rooms and clinics, answered questions from waiting room occupants",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Professional Journey
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Experience
        </h2>
        <div className="section-divider mx-auto" />

        {/* Work Experience */}
        <h3 className="text-lg font-semibold text-slate-700 mt-10 mb-6">Work Experience</h3>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />
          <div className="flex flex-col gap-6">
            {workExperience.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                <div className={`hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full items-center justify-center text-white text-xs font-bold shadow-sm z-10 ${exp.logoBg}`}>
                  {exp.logo.length <= 2 ? exp.logo : exp.logo.slice(0, 2)}
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-semibold text-slate-900">{exp.role}</h4>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${exp.typeColor}`}>{exp.type}</span>
                      </div>
                      <p className="text-blue-700 font-medium text-sm">{exp.org}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-slate-400 text-xs whitespace-nowrap">
                      <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{exp.description}</p>
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

        {/* Volunteer */}
        <h3 className="text-lg font-semibold text-slate-700 mt-14 mb-6">Volunteer Experience</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {volunteerExperience.map((v, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-200 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <p className="text-xs text-rose-500 font-medium">{v.period}</p>
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{v.role}</h4>
              <p className="text-blue-600 text-xs font-medium mb-3">{v.org}</p>
              <ul className="flex flex-col gap-1.5">
                {v.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
