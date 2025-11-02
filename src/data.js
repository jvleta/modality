export const keyOrder = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "Gb",
  "Db",
  "Ab",
  "Eb",
  "Bb",
  "F",
];

export const keyData = {
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

export const modeCharacteristics = {
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

export function generateModeNotes(parentKeyNotes, modeIndex) {
  const noteNumbers = Array.from({ length: 7 }, (_, i) => i);
  const modeNotes = noteNumbers.map((i) => {
    const noteIndex = (modeIndex + i) % 7;
    console.log("noteIndex:", noteIndex);
    return parentKeyNotes[noteIndex];
  });
  return modeNotes;
}

function getChordType(chordName) {
  if (chordName.includes("m7♭5")) {
    return "m7b5";
  } else if (chordName.includes("m7")) {
    return "m7";
  } else if (chordName.endsWith("7") && !chordName.includes("maj")) {
    return "7";
  }
  return "maj7";
}

export function getChordDetails(chordName, keyNotes, scalePosition) {
  const chordType = getChordType(chordName);
  
  const structure = chordStructures[chordType];
  const chordNotes = [];
  const romanNumerals = [];

  for (let i = 0; i < 4; i++) {
    const noteIndex = (scalePosition + i * 2) % 7;
    chordNotes.push(keyNotes[noteIndex]);
    romanNumerals.push(structure.romanNumerals[i]);
  }

  return {
    type: structure.name,
    notes: chordNotes,
    romanNumerals,
  };
}
