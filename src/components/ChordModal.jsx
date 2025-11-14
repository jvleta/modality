const ChordModal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chordModalTitle"
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
          id="chordModalTitle"
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          {content.chordName}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-center text-xl font-semibold text-forest-100">
              Notes
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
              Scale Degrees
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {content.romanNumerals.map((interval, idx) => (
                <span
                  key={`${interval}-${idx}`}
                  className="tag-pill-muted text-base font-semibold"
                >
                  {interval}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-center text-xl font-semibold text-forest-100">
              Chord Quality
            </h3>
            <div className="flex justify-center">
              <span className="tag-pill-muted text-base font-semibold">
                {content.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordModal;
