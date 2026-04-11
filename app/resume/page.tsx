import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resume — Rebecca Mammarappallil",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <span
          className="text-slate-900 font-semibold text-sm"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Rebecca Mammarappallil — Resume
        </span>

        <a
          href="/NEW_RESUME_IIT.pdf"
          download="Rebecca_Mammarappallil_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* PDF viewer */}
      <div className="flex-1 flex items-start justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <iframe
            src="/NEW_RESUME_IIT.pdf"
            className="w-full"
            style={{ height: "90vh", minHeight: "800px" }}
            title="Rebecca Mammarappallil Resume"
          />
        </div>
      </div>
    </div>
  );
}
