
export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-slate-900 font-semibold"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Rebecca Mammarappallil
        </p>

        <p className="text-slate-400 text-sm text-center">
          B.S. Biology · Illinois Tech · Future Physician at LECOM
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/reb-mamm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-300">
          © {new Date().getFullYear()} Rebecca Mammarappallil · Distinguished Communicator Medal Portfolio
        </p>
      </div>
    </footer>
  );
}
