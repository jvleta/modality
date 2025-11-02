import { useEffect, useMemo, useRef, useState } from "react";
import {
  keyOrder,
  keyData,
  modeCharacteristics,
  generateModeNotes,
  getChordDetails,
} from "./data";

const App = () => {
  const [selectedKey, setSelectedKey] = useState("");
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
    <div className="container">
      <h1>Major Keys Reference</h1>

      <div className="key-selector">
        <label htmlFor="keySelect">Select a Major Key:</label>
        <select
          id="keySelect"
          value={selectedKey}
          onChange={handleKeyChange}
          aria-label="Select a major key"
        >
          <option value="">-- Choose a Key --</option>
          {keyOrder.map((key) => (
            <option key={key} value={key}>
              {keyData[key].name}
            </option>
          ))}
        </select>
      </div>

      {keyInfo && (
        <div id="keyInfo" className="key-info" ref={keyInfoRef}>
          <div className="info-section">
            <h2 id="keyTitle">{keyInfo.name}</h2>

            <div className="info-grid">
              <div className="info-card scale-notes-card">
                <h3>Scale Notes</h3>
                <div id="scaleNotes" className="scale-notes">
                  {keyInfo.notes.map((note) => (
                    <span key={note} className="note">
                      {note}
                    </span>
                  ))}
                </div>
                <div className="key-signature-info">
                  <span id="keySignature" className="key-signature">
                    {keyInfo.keySignature}
                  </span>
                </div>
              </div>

              <div className="info-card chords-card">
                <h3>7th Chords</h3>
                <div id="seventhChords" className="seventh-chords">
                  {keyInfo.seventhChords.map((chord, index) => (
                    <div
                      key={chord}
                      className="chord-item"
                      onClick={() => handleChordClick(chord, index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleChordClick(chord, index);
                        }
                      }}
                      aria-label={`View details for ${chord}`}
                    >
                      <span className="chord-note">{keyInfo.notes[index]}</span>
                      <span className="chord-name">{chord}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-card modes-card">
                <h3>Modes</h3>
                <div id="modes" className="modes">
                  {keyInfo.modes.map((mode, index) => (
                    <div
                      key={mode}
                      className="mode-item"
                      onClick={() => handleModeClick(mode, index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleModeClick(mode, index);
                        }
                      }}
                      aria-label={`View details for ${mode} mode`}
                    >
                      <span className="mode-note">{keyInfo.notes[index]}</span>
                      <span className="mode-name">{mode}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {chordModalContent && (
        <div
          className="modal show"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chordModalTitle"
          onClick={closeModals}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="close" onClick={closeModals} aria-label="Close">
              &times;
            </span>
            <h2 id="chordModalTitle">{chordModalContent.chordName}</h2>
            <div className="modal-body">
              <div className="chord-details">
                <div className="chord-notes-section">
                  <h3>Notes</h3>
                  <div
                    id="chordNotesDisplay"
                    className="chord-notes-display"
                  >
                    {chordModalContent.notes.map((note) => (
                      <div key={note} className="chord-note-item">
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chord-intervals-section">
                  <h3>Scale Degrees (Roman Numerals)</h3>
                  <div
                    id="chordIntervalsDisplay"
                    className="chord-intervals-display"
                  >
                    {chordModalContent.romanNumerals.map((interval, idx) => (
                      <div key={`${interval}-${idx}`} className="chord-interval-item">
                        {interval}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chord-info-section">
                  <h3>Chord Quality</h3>
                  <div className="chord-info-display">
                    <div className="chord-info-item">
                      {chordModalContent.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modeModalContent && (
        <div
          className="modal show"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modeModalTitle"
          onClick={closeModals}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="close" onClick={closeModals} aria-label="Close">
              &times;
            </span>
            <h2 id="modeModalTitle">{modeModalContent.title}</h2>
            <div className="modal-body">
              <div className="mode-details">
                <div className="mode-notes-section">
                  <h3>Mode Notes</h3>
                  <div id="modeNotesDisplay" className="mode-notes-display">
                    {modeModalContent.notes.map((note) => (
                      <div key={note} className="mode-note-item">
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mode-degrees-section">
                  <h3>Mode Formula</h3>
                  <div id="modeDegreesDisplay" className="mode-degrees-display">
                    {modeModalContent.formula.map((degree, idx) => (
                      <div
                        key={`${degree}-${idx}`}
                        className={`mode-degree-item${
                          degree.includes("♭") || degree.includes("♯")
                            ? " altered-degree"
                            : ""
                        }`}
                      >
                        {degree}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mode-info-section">
                  <h3>Overview</h3>
                  <div className="mode-info-display">
                    <div className="mode-info-item">
                      {modeModalContent.character}
                    </div>
                    <div className="mode-info-item">
                      {modeModalContent.alterations}
                    </div>
                    <div className="mode-info-item">
                      {modeModalContent.commonUse}
                    </div>
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

