const ModeModal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modeModalTitle"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-base font-semibold text-zinc-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          X
        </button>
        <h2
          id="modeModalTitle"
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          {content.title}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-center text-xl font-semibold text-forest-100">
              Mode Notes
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {content.notes.map((note) => (
                <span key={note} className="tag-pill text-lg">
                  {note}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-center text-xl font-semibold text-forest-100">
              Mode Formula
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {content.formula.map((degree, idx) => (
                <span
                  key={`${degree}-${idx}`}
                  className={
                    degree.includes("♭") || degree.includes("♯")
                      ? "tag-pill-amber text-base font-semibold"
                      : "tag-pill-muted text-base font-semibold"
                  }
                >
                  {degree}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-center text-xl font-semibold text-forest-100">
              Overview
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-200">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-forest-200">
                  Character
                </span>
                <p className="mt-2 text-base text-zinc-100">{content.character}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-forest-200">
                  Alterations
                </span>
                <p className="mt-2 text-base text-zinc-100">{content.alterations}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-forest-200">
                  Common Use
                </span>
                <p className="mt-2 text-base text-zinc-100">{content.commonUse}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeModal;
