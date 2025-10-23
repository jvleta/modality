// Major key data with scale notes, 7th chords, and modes
const keyData = {
  C: {
    name: "C Major",
    notes: ["C", "D", "E", "F", "G", "A", "B"],
    seventhChords: ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "No sharps or flats",
  },
  G: {
    name: "G Major",
    notes: ["G", "A", "B", "C", "D", "E", "F♯"],
    seventhChords: ["Gmaj7", "Am7", "Bm7", "Cmaj7", "D7", "Em7", "F♯m7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "1 sharp (F♯)",
  },
  D: {
    name: "D Major",
    notes: ["D", "E", "F♯", "G", "A", "B", "C♯"],
    seventhChords: ["Dmaj7", "Em7", "F♯m7", "Gmaj7", "A7", "Bm7", "C♯m7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "2 sharps (F♯, C♯)",
  },
  A: {
    name: "A Major",
    notes: ["A", "B", "C♯", "D", "E", "F♯", "G♯"],
    seventhChords: ["Amaj7", "Bm7", "C♯m7", "Dmaj7", "E7", "F♯m7", "G♯m7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "3 sharps (F♯, C♯, G♯)",
  },
  E: {
    name: "E Major",
    notes: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"],
    seventhChords: ["Emaj7", "F♯m7", "G♯m7", "Amaj7", "B7", "C♯m7", "D♯m7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "4 sharps (F♯, C♯, G♯, D♯)",
  },
  B: {
    name: "B Major",
    notes: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"],
    seventhChords: ["Bmaj7", "C♯m7", "D♯m7", "Emaj7", "F♯7", "G♯m7", "A♯m7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "5 sharps (F♯, C♯, G♯, D♯, A♯)",
  },
  Gb: {
    name: "F♯/G♭ Major",
    notes: ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"],
    seventhChords: ["G♭maj7", "A♭m7", "B♭m7", "C♭maj7", "D♭7", "E♭m7", "Fm7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "6 flats (B♭, E♭, A♭, D♭, G♭, C♭)",
  },
  Db: {
    name: "D♭ Major",
    notes: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
    seventhChords: ["D♭maj7", "E♭m7", "Fm7", "G♭maj7", "A♭7", "B♭m7", "Cm7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "5 flats (B♭, E♭, A♭, D♭, G♭)",
  },
  Ab: {
    name: "A♭ Major",
    notes: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
    seventhChords: ["A♭maj7", "B♭m7", "Cm7", "D♭maj7", "E♭7", "Fm7", "Gm7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "4 flats (B♭, E♭, A♭, D♭)",
  },
  Eb: {
    name: "E♭ Major",
    notes: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
    seventhChords: ["E♭maj7", "Fm7", "Gm7", "A♭maj7", "B♭7", "Cm7", "Dm7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "3 flats (B♭, E♭, A♭)",
  },
  Bb: {
    name: "B♭ Major",
    notes: ["B♭", "C", "D", "E♭", "F", "G", "A"],
    seventhChords: ["B♭maj7", "Cm7", "Dm7", "E♭maj7", "F7", "Gm7", "Am7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "2 flats (B♭, E♭)",
  },
  F: {
    name: "F Major",
    notes: ["F", "G", "A", "B♭", "C", "D", "E"],
    seventhChords: ["Fmaj7", "Gm7", "Am7", "B♭maj7", "C7", "Dm7", "Em7♭5"],
    modes: [
      "Ionian",
      "Dorian",
      "Phrygian",
      "Lydian",
      "Mixolydian",
      "Aeolian",
      "Locrian",
    ],
    keySignature: "1 flat (B♭)",
  },
};

// Mode mapping - which mode degree corresponds to which mode
const modeMapping = {
  Ionian: 0,
  Dorian: 1,
  Phrygian: 2,
  Lydian: 3,
  Mixolydian: 4,
  Aeolian: 5,
  Locrian: 6,
};

// Chord structures and intervals
const chordStructures = {
  maj7: {
    intervals: [1, 3, 5, 7],
    romanNumerals: ["I", "III", "V", "VII"],
    name: "Major 7th",
  },
  m7: {
    intervals: [1, 3, 5, 7],
    romanNumerals: ["i", "iii", "v", "vii"],
    name: "Minor 7th",
  },
  7: {
    intervals: [1, 3, 5, 7],
    romanNumerals: ["I", "III", "V", "vii"],
    name: "Dominant 7th",
  },
  m7b5: {
    intervals: [1, 3, 5, 7],
    romanNumerals: ["i", "iii", "v°", "vii"],
    name: "Minor 7th ♭5 (Half-diminished)",
  },
};

// Mode characteristics and information
const modeCharacteristics = {
  Ionian: {
    formula: "1 2 3 4 5 6 7",
    character: "Bright, happy, stable - the major scale",
    alterations: "No alterations",
    commonUse: "Pop, rock, classical - most common mode",
  },
  Dorian: {
    formula: "1 2 ♭3 4 5 6 ♭7",
    character: "Jazzy, sophisticated, minor but not sad",
    alterations: "♭3, ♭7",
    commonUse: "Jazz, Celtic, rock (Scarborough Fair, So What)",
  },
  Phrygian: {
    formula: "1 ♭2 ♭3 4 5 ♭6 ♭7",
    character: "Dark, exotic, Spanish/Middle Eastern flavor",
    alterations: "♭2, ♭3, ♭6, ♭7",
    commonUse: "Flamenco, metal, world music",
  },
  Lydian: {
    formula: "1 2 3 ♯4 5 6 7",
    character: "Dreamy, floating, mysterious bright sound",
    alterations: "♯4",
    commonUse: "Film scores, progressive music (The Simpsons theme)",
  },
  Mixolydian: {
    formula: "1 2 3 4 5 6 ♭7",
    character: "Bluesy, rock-oriented, major with edge",
    alterations: "♭7",
    commonUse: "Blues, rock, Celtic (Sweet Caroline, Norwegian Wood)",
  },
  Aeolian: {
    formula: "1 2 ♭3 4 5 ♭6 ♭7",
    character: "Sad, melancholic - the natural minor scale",
    alterations: "♭3, ♭6, ♭7",
    commonUse: "Classical, rock, pop - very common for sad songs",
  },
  Locrian: {
    formula: "1 ♭2 ♭3 4 ♭5 ♭6 ♭7",
    character: "Unstable, dissonant, rarely used as tonic",
    alterations: "♭2, ♭3, ♭5, ♭6, ♭7",
    commonUse: "Jazz theory, metal, experimental music",
  },
};

// Note mapping for enharmonic equivalents
const noteMapping = {
  C: ["C"],
  "C#": ["C♯", "D♭"],
  D: ["D"],
  "D#": ["D♯", "E♭"],
  E: ["E"],
  F: ["F"],
  "F#": ["F♯", "G♭"],
  G: ["G"],
  "G#": ["G♯", "A♭"],
  A: ["A"],
  "A#": ["A♯", "B♭"],
  B: ["B"],
};

// Function to find parent key of a mode
function findParentKey(note, mode) {
  const modeIndex = modeMapping[mode];
  const possibleNotes = noteMapping[note];

  // Check all keys to find which one has the given note at the given mode position
  for (const [keyName, keyInfo] of Object.entries(keyData)) {
    const keyNotes = keyInfo.notes;
    const noteAtModePosition = keyNotes[modeIndex];

    // Check if any of the possible enharmonic spellings match
    if (
      possibleNotes.some(
        (possibleNote) =>
          noteAtModePosition === possibleNote ||
          (possibleNote.includes("♯") && noteAtModePosition.includes("♯")) ||
          (possibleNote.includes("♭") && noteAtModePosition.includes("♭"))
      )
    ) {
      return {
        key: keyInfo.name,
        keySignature: keyInfo.keySignature,
        allNotes: keyInfo.notes,
        modeNotes: generateModeNotes(keyNotes, modeIndex, note),
      };
    }
  }

  return null;
}

// Function to generate mode notes starting from the selected note
function generateModeNotes(parentKeyNotes, modeIndex, startingNote) {
  const modeNotes = [];
  for (let i = 0; i < 7; i++) {
    const noteIndex = (modeIndex + i) % 7;
    modeNotes.push(parentKeyNotes[noteIndex]);
  }
  return modeNotes;
}

// Function to get altered notes for a mode
function getModeAlterations(mode) {
  const alterations = {
    Ionian: [],
    Dorian: ["♭3", "♭7"],
    Phrygian: ["♭2", "♭3", "♭6", "♭7"],
    Lydian: ["♯4"],
    Mixolydian: ["♭7"],
    Aeolian: ["♭3", "♭6", "♭7"],
    Locrian: ["♭2", "♭3", "♭5", "♭6", "♭7"],
  };

  return alterations[mode] || [];
}

// DOM elements
const keySelect = document.getElementById("keySelect");
const keyInfo = document.getElementById("keyInfo");
const keyTitle = document.getElementById("keyTitle");
const scaleNotes = document.getElementById("scaleNotes");
const keySignature = document.getElementById("keySignature");
const seventhChords = document.getElementById("seventhChords");
const modes = document.getElementById("modes");

// Mode finder elements (not used in current implementation)

// Event listener for key selection
keySelect.addEventListener("change", function () {
  const selectedKey = this.value;

  if (selectedKey === "") {
    keyInfo.classList.add("hidden");
    return;
  }

  displayKeyInfo(selectedKey);
});

// Event listeners for mode finder (removed - not used in current implementation)

// displayModeResult function removed - not used in current implementation

// Function to display key information
function displayKeyInfo(key) {
  const data = keyData[key];

  // Update title
  keyTitle.textContent = data.name;

  // Display scale notes
  scaleNotes.innerHTML = "";
  data.notes.forEach((note) => {
    const noteElement = document.createElement("span");
    noteElement.className = "note";
    noteElement.textContent = note;
    scaleNotes.appendChild(noteElement);
  });

  // Display key signature
  keySignature.textContent = data.keySignature;

  // Display 7th chords
  seventhChords.innerHTML = "";
  data.seventhChords.forEach((chord, index) => {
    const chordElement = document.createElement("div");
    chordElement.className = "chord-item";

    const noteSpan = document.createElement("span");
    noteSpan.className = "chord-note";
    noteSpan.textContent = data.notes[index];

    const chordSpan = document.createElement("span");
    chordSpan.className = "chord-name";
    chordSpan.textContent = chord;

    chordElement.appendChild(noteSpan);
    chordElement.appendChild(chordSpan);

    // Add click event listener for chord modal
    chordElement.addEventListener("click", () => {
      showChordModal(chord, data.notes, index);
    });

    seventhChords.appendChild(chordElement);
  });

  // Display modes
  modes.innerHTML = "";
  data.modes.forEach((mode, index) => {
    const modeElement = document.createElement("div");
    modeElement.className = "mode-item";

    const noteSpan = document.createElement("span");
    noteSpan.className = "mode-note";
    noteSpan.textContent = data.notes[index];

    const modeSpan = document.createElement("span");
    modeSpan.className = "mode-name";
    modeSpan.textContent = mode;

    modeElement.appendChild(noteSpan);
    modeElement.appendChild(modeSpan);

    // Add click event listener for mode modal
    modeElement.addEventListener("click", () => {
      showModeModal(mode, data.notes, index, data.name);
    });

    modes.appendChild(modeElement);
  });

  // Show the key info section
  keyInfo.classList.remove("hidden");

  // Smooth scroll to the key info
  keyInfo.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    // Ensure any other modals are closed first
    document.querySelectorAll(".modal.show").forEach((openModal) => {
      if (openModal.id !== modalId) {
        closeModal(openModal.id);
      }
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Use requestAnimationFrame to ensure proper timing
    requestAnimationFrame(() => {
      modal.classList.add("show");
    });
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal && modal.classList.contains("show")) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
    // Use a small delay to ensure the animation completes
    setTimeout(() => {
      if (!modal.classList.contains("show")) {
        modal.style.display = "none";
      }
    }, 300);
  }
}

// Function to get chord notes and roman numerals
function getChordDetails(chordName, keyNotes, scalePosition) {
  // Parse chord type
  let chordType = "maj7";
  if (chordName.includes("m7♭5")) chordType = "m7b5";
  else if (chordName.includes("m7")) chordType = "m7";
  else if (chordName.endsWith("7") && !chordName.includes("maj"))
    chordType = "7";

  const structure = chordStructures[chordType];
  const rootNote = keyNotes[scalePosition];

  // Get chord notes (1st, 3rd, 5th, 7th of the scale from this position)
  const chordNotes = [];
  const romanNumerals = [];

  for (let i = 0; i < 4; i++) {
    const noteIndex = (scalePosition + i * 2) % 7;
    chordNotes.push(keyNotes[noteIndex]);
    romanNumerals.push(structure.romanNumerals[i]);
  }

  return {
    notes: chordNotes,
    romanNumerals: romanNumerals,
    chordType: structure.name,
    rootNote: rootNote,
  };
}

// Function to show chord modal
function showChordModal(chordName, keyNotes, scalePosition) {
  const chordDetails = getChordDetails(chordName, keyNotes, scalePosition);

  // Update modal title
  document.getElementById("chordModalTitle").textContent = chordName;

  // Display chord notes
  const notesDisplay = document.getElementById("chordNotesDisplay");
  notesDisplay.innerHTML = "";
  chordDetails.notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.className = "chord-note-item";
    noteElement.textContent = note;
    notesDisplay.appendChild(noteElement);
  });

  // Display roman numerals
  const intervalsDisplay = document.getElementById("chordIntervalsDisplay");
  intervalsDisplay.innerHTML = "";
  chordDetails.romanNumerals.forEach((numeral) => {
    const intervalElement = document.createElement("div");
    intervalElement.className = "chord-interval-item";
    intervalElement.textContent = numeral;
    intervalsDisplay.appendChild(intervalElement);
  });

  openModal("chordModal");
}

// Function to show mode modal
function showModeModal(modeName, keyNotes, scalePosition, parentKey) {
  const modeCharacteristic = modeCharacteristics[modeName];
  const modeNotes = generateModeNotes(
    keyNotes,
    scalePosition,
    keyNotes[scalePosition]
  );

  // Update modal title
  document.getElementById(
    "modeModalTitle"
  ).textContent = `${keyNotes[scalePosition]} ${modeName}`;

  // Display mode notes
  const notesDisplay = document.getElementById("modeNotesDisplay");
  notesDisplay.innerHTML = "";
  modeNotes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.className = "mode-note-item";
    noteElement.textContent = note;
    notesDisplay.appendChild(noteElement);
  });

  // Display mode formula (alterations from major scale)
  const degreesDisplay = document.getElementById("modeDegreesDisplay");
  degreesDisplay.innerHTML = "";
  const formula = modeCharacteristic.formula.split(" ");
  formula.forEach((degree) => {
    const degreeElement = document.createElement("div");
    degreeElement.className = "mode-degree-item";
    // Highlight altered notes with a different style
    if (degree.includes("♭") || degree.includes("♯")) {
      degreeElement.classList.add("altered-degree");
    }
    degreeElement.textContent = degree;
    degreesDisplay.appendChild(degreeElement);
  });

  openModal("modeModal");
}

// Add some interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to notes and chords
  document.addEventListener("mouseover", function (e) {
    if (
      e.target.classList.contains("note") ||
      e.target.classList.contains("chord-name") ||
      e.target.classList.contains("mode-name")
    ) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.transition = "transform 0.2s ease";
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (
      e.target.classList.contains("note") ||
      e.target.classList.contains("chord-name") ||
      e.target.classList.contains("mode-name")
    ) {
      e.target.style.transform = "scale(1)";
    }
  });

  // Add keyboard navigation
  keySelect.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      this.click();
    }
  });

  // Add specific event listeners to close buttons
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const modalId = this.getAttribute("data-modal");
      if (modalId) {
        closeModal(modalId);
      }
    });
  });

  // Modal event listeners
  document.addEventListener("click", function (e) {
    // Close modal when clicking close button
    if (e.target.classList.contains("close")) {
      e.preventDefault();
      e.stopPropagation();
      const modalId = e.target.getAttribute("data-modal");
      if (modalId) {
        closeModal(modalId);
      }
    }

    // Close modal when clicking outside (on the modal backdrop)
    if (
      e.target.classList.contains("modal") &&
      e.target.classList.contains("show")
    ) {
      const modalId = e.target.id;
      closeModal(modalId);
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const modals = document.querySelectorAll(".modal.show");
      if (modals.length > 0) {
        modals.forEach((modal) => {
          closeModal(modal.id);
        });
      }
    }
  });
});
