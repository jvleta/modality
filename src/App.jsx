import { useEffect, useMemo, useRef, useState } from "react";
import {
  keyOrder,
  keyData,
  modeCharacteristics,
  generateModeNotes,
  getChordDetails,
} from "./data";
import Header from "./components/Header";
import KeySelector from "./components/KeySelector";
import KeyDetails from "./components/KeyDetails";
import ChordModal from "./components/ChordModal";
import ModeModal from "./components/ModeModal";

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
      <Header />
      <KeySelector
        selectedKey={selectedKey}
        onChange={handleKeyChange}
        keyOrderList={keyOrder}
        keyDataMap={keyData}
      />
      {keyInfo && (
        <KeyDetails
          keyInfo={keyInfo}
          onChordClick={handleChordClick}
          onModeClick={handleModeClick}
          ref={keyInfoRef}
        />
      )}
      <ChordModal content={chordModalContent} onClose={closeModals} />
      <ModeModal content={modeModalContent} onClose={closeModals} />
    </div>
  );
};

export default App;
