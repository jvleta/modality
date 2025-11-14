import { useEffect, useMemo, useRef, useState } from "react";
import {
  keyOrder,
  keyData,
  modeCharacteristics,
  generateModeNotes,
  getChordDetails,
} from "./data";

const App = () => {
  const [selectedKey, setSelectedKey] = useState(keyOrder[0]);
  const [chordModal, setChordModal] = useState(null);
  const [modeModal, setModeModal] = useState(null);
  const keyInfoRef = useRef(null);

  const keyInfo = selectedKey ? keyData[selectedKey] : null;

  useEffect(() => {
    if (keyInfoRef.current && selectedKey) {
      keyInfoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedKey]);

  useEffect(() => {
    const anyModalOpen = chordModal || modeModal;
    document.body.style.overflow = anyModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [chordModal, modeModal]);

  useEffect(() => {
    if (!chordModal && !modeModal) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chordModal, modeModal]);

  const closeModals = () => {
    setChordModal(null);
    setModeModal(null);
  };

  const handleKeyChange = (event) => {
    setSelectedKey(event.target.value);
    closeModals();
  };

  const handleChordClick = (chordName, index) => {
    if (!keyInfo) return;
    const details = getChordDetails(chordName, keyInfo.notes, index);
    setChordModal({
      chordName,
      notes: details.notes,
      romanNumerals: details.romanNumerals,
      type: details.type,
    });
  };

  const handleModeClick = (modeName, index) => {
    if (!keyInfo) return;
    const modeNotes = generateModeNotes(keyInfo.notes, index);
    const modeInfo = modeCharacteristics[modeName];
    setModeModal({
      title: `${keyInfo.notes[index]} ${modeName}`,
      notes: modeNotes,
      formula: modeInfo.formula.split(" "),
      character: modeInfo.character,
      alterations: modeInfo.alterations,
      commonUse: modeInfo.commonUse,
    });
  };

  const chordModalContent = useMemo(() => chordModal, [chordModal]);
  const modeModalContent = useMemo(() => modeModal, [modeModal]);

  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-card backdrop-blur-xl">
      <header className="bg-forest-gradient px-6 py-10 text-center text-white md:px-12 md:py-12">
        <h1 className="text-3xl font-semibold tracking-[0.35em] uppercase md:text-4xl">
          Major Keys Reference
        </h1>
        <p className="mt-4 text-base font-medium tracking-wide text-white/80 md:text-lg">
          Explore every major key, its seventh chords, and modal colors.
        </p>
      </header>

      <section className="space-y-5 border-b border-white/10 bg-zinc-900/60 px-6 py-8 text-center md:px-12 md:py-10">
        <label
          htmlFor="keySelect"
          className="block text-lg font-semibold tracking-wide text-zinc-100 md:text-xl"
        >
          Select a Major Key
        </label>
        <div className="flex justify-center">
          <select
            id="keySelect"
            value={selectedKey}
            onChange={handleKeyChange}
            aria-label="Select a major key"
            className="w-full max-w-xs rounded-xl border border-forest-500/40 bg-zinc-950/70 px-4 py-3 text-base text-zinc-100 transition focus:outline-none focus:ring-2 focus:ring-forest-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            <option value="">-- Choose a Key --</option>
            {keyOrder.map((key) => (
              <option key={key} value={key}>
                {keyData[key].name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {keyInfo && (
        <section
          id="keyInfo"
          className="space-y-12 px-6 py-10 md:px-12"
          ref={keyInfoRef}
        >
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
                <div
                  id="scaleNotes"
                  className="flex flex-wrap justify-center gap-3"
                >
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
                      onClick={() => handleChordClick(chord, index)}
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
                      onClick={() => handleModeClick(mode, index)}
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
      )}

      {chordModalContent && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chordModalTitle"
          onClick={closeModals}
        >
          <div
            className="modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-base font-semibold text-zinc-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              onClick={closeModals}
            >
              <span className="sr-only">Close</span>
              X
            </button>
            <h2
              id="chordModalTitle"
              className="text-center text-3xl font-semibold text-white md:text-4xl"
            >
              {chordModalContent.chordName}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold text-forest-100">
                  Notes
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {chordModalContent.notes.map((note) => (
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
                  {chordModalContent.romanNumerals.map((interval, idx) => (
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
                    {chordModalContent.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modeModalContent && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modeModalTitle"
          onClick={closeModals}
        >
          <div
            className="modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-base font-semibold text-zinc-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              onClick={closeModals}
            >
              <span className="sr-only">Close</span>
              X
            </button>
            <h2
              id="modeModalTitle"
              className="text-center text-3xl font-semibold text-white md:text-4xl"
            >
              {modeModalContent.title}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-center text-xl font-semibold text-forest-100">
                  Mode Notes
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {modeModalContent.notes.map((note) => (
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
                  {modeModalContent.formula.map((degree, idx) => (
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
                    <p className="mt-2 text-base text-zinc-100">
                      {modeModalContent.character}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-forest-200">
                      Alterations
                    </span>
                    <p className="mt-2 text-base text-zinc-100">
                      {modeModalContent.alterations}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-forest-200">
                      Common Use
                    </span>
                    <p className="mt-2 text-base text-zinc-100">
                      {modeModalContent.commonUse}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
