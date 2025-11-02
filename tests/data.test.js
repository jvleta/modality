import { generateModeNotes, getChordDetails, keyData } from "../src/data";

describe("generateModeNotes", () => {
  const parentKeyNotes = keyData.C.notes;

  test("returns the original scale when starting from Ionian", () => {
    expect(generateModeNotes(parentKeyNotes, 0)).toEqual(parentKeyNotes);
  });

  test("rotates notes to start at the requested mode index", () => {
    expect(generateModeNotes(parentKeyNotes, 2)).toEqual([
      "E",
      "F",
      "G",
      "A",
      "B",
      "C",
      "D",
    ]);
  });
});

describe("getChordDetails", () => {
  const parentKeyNotes = keyData.C.notes;

  test.each([
    [
      "Cmaj7",
      0,
      {
        type: "Major 7th",
        notes: ["C", "E", "G", "B"],
        romanNumerals: ["I", "III", "V", "VII"],
      },
    ],
    [
      "Dm7",
      1,
      {
        type: "Minor 7th",
        notes: ["D", "F", "A", "C"],
        romanNumerals: ["i", "iii", "v", "vii"],
      },
    ],
    [
      "G7",
      4,
      {
        type: "Dominant 7th",
        notes: ["G", "B", "D", "F"],
        romanNumerals: ["I", "III", "V", "vii"],
      },
    ],
    [
      "Bm7♭5",
      6,
      {
        type: "Minor 7th ♭5 (Half-diminished)",
        notes: ["B", "D", "F", "A"],
        romanNumerals: ["i", "iii", "v°", "vii"],
      },
    ],
  ])("returns details for %s", (chordName, scalePosition, expected) => {
    expect(getChordDetails(chordName, parentKeyNotes, scalePosition)).toEqual(
      expected,
    );
  });
});
