import { forwardRef } from "react";

const KeyDetails = forwardRef(({ keyInfo, onChordClick, onModeClick }, ref) => (
  <section id="keyInfo" className="space-y-12 px-6 py-10 md:px-12" ref={ref}>
    <div className="space-y-8">
      <h2
        id="keyTitle"
        className="text-center text-3xl font-semibold text-white md:text-4xl"
      >
        {keyInfo.name}
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="space-y-6 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow-green lg:p-8">
          <h3 className="text-center text-2xl font-semibold tracking-wide text-forest-100">
            Scale Notes
          </h3>
          <div id="scaleNotes" className="flex flex-wrap justify-center gap-3">
            {keyInfo.notes.map((note) => (
              <span key={note} className="tag-pill text-xl">
                {note}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <span
              id="keySignature"
              className="tag-pill-muted text-sm font-semibold tracking-wide"
            >
              {keyInfo.keySignature}
            </span>
          </div>
        </article>

        <article className="space-y-6 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow-green lg:p-8">
          <h3 className="text-center text-2xl font-semibold tracking-wide text-forest-100">
            7th Chords
          </h3>
          <div id="seventhChords" className="grid gap-4">
            {keyInfo.seventhChords.map((chord, index) => (
              <button
                key={chord}
                type="button"
                onClick={() => onChordClick(chord, index)}
                aria-label={`View details for ${chord}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-zinc-700/60 bg-zinc-900/70 px-5 py-4 text-left transition duration-200 hover:border-forest-300 hover:shadow-glow-green focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                <span className="tag-pill-muted text-base font-semibold transition group-hover:border-forest-300/80 group-hover:text-forest-100">
                  {keyInfo.notes[index]}
                </span>
                <span className="text-lg font-semibold text-zinc-100 md:text-xl">
                  {chord}
                </span>
              </button>
            ))}
          </div>
        </article>

        <article className="space-y-6 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow-green lg:p-8">
          <h3 className="text-center text-2xl font-semibold tracking-wide text-forest-100">
            Modes
          </h3>
          <div id="modes" className="grid gap-4">
            {keyInfo.modes.map((mode, index) => (
              <button
                key={mode}
                type="button"
                onClick={() => onModeClick(mode, index)}
                aria-label={`View details for ${mode} mode`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-forest-500/30 bg-forest-400/10 px-5 py-4 text-left transition duration-200 hover:border-forest-300 hover:bg-forest-400/20 hover:shadow-glow-green focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                <span className="tag-pill text-base font-semibold text-white">
                  {keyInfo.notes[index]}
                </span>
                <span className="text-lg font-semibold text-zinc-100 md:text-xl">
                  {mode}
                </span>
              </button>
            ))}
          </div>
        </article>
      </div>
    </div>
  </section>
));

export default KeyDetails;
