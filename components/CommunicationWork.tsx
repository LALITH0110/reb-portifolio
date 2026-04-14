import Image from "next/image";
import { FileText, ExternalLink, Presentation, ScrollText } from "lucide-react";

const samples = [
  {
    title: "Pedal to the Future — Innovation Day",
    type: "Poster & Presentation",
    course: "IPRO Program · Illinois Tech · Fall 2025",
    icon: <Presentation size={20} className="text-blue-600" />,
    iconBg: "bg-blue-50 border-blue-100",
    tag: "Poster",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/innovation-day-pic.jpeg",
    description:
      "This poster and presentation showcase Team Pedal to the Future's adaptive cycling cushion — designed to help individuals with mobility limitations maintain safe leg positioning during adaptive cycling. The visual-first format, combining clear engineering diagrams, universal design principles, and plain language, was chosen deliberately to speak across a broad audience of engineers, clinicians, and community members at Illinois Tech's Innovation Day. By pairing research-backed evidence with prototype imagery and patient-centered storytelling, the work made a technical biomedical solution immediately compelling to a non-specialist audience.",
    links: [
      { label: "View Poster", href: "/PTTF Innovation Day Posters.pdf" },
    ],
  },
  {
    title: "RSV Prevention in Infants",
    type: "Slide Presentation",
    course: "BIOL 451: Biological Literature · Illinois Tech · Spring 2026",
    icon: <Presentation size={20} className="text-sky-600" />,
    iconBg: "bg-sky-50 border-sky-100",
    tag: "Slide Deck",
    tagColor: "bg-sky-100 text-sky-700",
    image: null,
    description:
      "This slide presentation traces 25 years of RSV prevention — from the first monoclonal antibody (palivizumab, 1998) to nirsevimab and maternal vaccination (2022–2023) — for a biology-literate academic audience. The slide format allowed complex immunological concepts such as IgG mechanisms, Fc engineering, and transplacental antibody transfer to be structured chronologically, making decades of scientific progress intuitive and easy to follow. Visual timelines paired with key clinical trial statistics grounded the science in real patient outcomes, modeling the kind of evidence-based communication that matters most in a clinical setting.",
    links: [
      { label: "View Slides", href: "/biological-literature.pdf" },
    ],
  },
  {
    title: "Ethical Decision-Making in Counseling",
    type: "Academic Paper",
    course: "PSYC 410: Introduction to Rehabilitation & Mental Health Counseling · Illinois Tech · Fall 2025",
    icon: <ScrollText size={20} className="text-violet-600" />,
    iconBg: "bg-violet-50 border-violet-100",
    tag: "Written Analysis",
    tagColor: "bg-violet-100 text-violet-700",
    image: null,
    description:
      "This paper analyzes a complex dual-relationship ethical dilemma using the Tarvydas Integrative Decision-Making Model, written for a graduate-level rehabilitation counseling course. The structured academic format — working stage by stage through ethical reasoning with explicit citation of ACA and CRCC codes alongside Illinois state law — demonstrates how systematic frameworks make difficult moral decisions transparent, defensible, and reproducible. Writing for a professional clinical audience required a precision that mirrors the documentation standards expected in healthcare: every recommendation needed a cited ethical basis, not just intuition.",
    links: [
      { label: "View Paper", href: "/paper.docx" },
    ],
  },
];

export default function CommunicationWork() {
  return (
    <section id="communication" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Distinguished Communicator Portfolio
        </p>
        <h2
          className="text-4xl font-bold text-slate-900 mb-2 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Communication Work
        </h2>
        <div className="section-divider mx-auto" />

        {/* My Approach */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3
            className="text-2xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            My Approach to Technical Communication
          </h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mb-5" />
          <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
            <p>
              As a future osteopathic physician, I&apos;ve come to understand that the ability to communicate
              science clearly is not secondary to clinical skill — it <em>is</em> clinical skill. Whether
              explaining a differential diagnosis to a patient, presenting research findings to colleagues,
              or advocating for a health equity issue to a non-medical audience, the core question remains
              the same: who is reading this, and what do they need to walk away knowing?
            </p>
            <p>
              My work in clinical research at Mayo Clinic reinforced this directly. Lab findings mean nothing
              if they cannot be translated into actionable insights for the care team or the patient. My
              experience in the IPRO program taught me that even the most elegant biomedical design fails
              if you cannot communicate its value to the people who need it. Through coursework, research,
              and hands-on clinical exposure, I&apos;ve learned to move across communication modes — from
              technical posters and slide presentations to written ethical analysis and face-to-face
              counseling conversations — while keeping the audience and their needs at the center.
            </p>
            <p>
              In medicine, poor communication costs lives. A physician who cannot explain a treatment plan
              in plain terms, or who cannot document clearly in a medical record, creates dangerous gaps in
              care. I believe that developing these skills during training — not after — is what separates a
              good clinician from a truly excellent one. That is why I have pursued every opportunity to
              practice and refine my communication across disciplines, and why I take the work below seriously
              as evidence of both my academic growth and my preparation for a career in medicine.
            </p>
          </div>
        </div>

        {/* Samples */}
        <div className="mt-10 flex flex-col gap-8">
          {samples.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all"
            >
              {/* Innovation Day — show photo at top */}
              {s.image && (
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                        {!s.image && (
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${s.tagColor}`}>
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 text-xs font-medium">{s.type}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{s.course}</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.description}</p>

                <div className="flex flex-wrap gap-3">
                  {s.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-full hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all"
                    >
                      <FileText size={13} />
                      {l.label}
                      <ExternalLink size={11} className="text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
