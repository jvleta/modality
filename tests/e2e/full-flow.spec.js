const { test, expect } = require('@playwright/test');
const {
  selectKey,
  expectKeyOverview,
  openChordModal,
  expectChordModal,
  openModeModal,
  expectModeModal,
  closeModal,
  expectBodyOverflow,
} = require('./utils');

const C_MAJOR = {
  label: 'C Major',
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  chords: ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7♭5'],
  modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
  keySignature: 'No sharps or flats',
};

const CMAJ7_MODAL = {
  notes: ['C', 'E', 'G', 'B'],
  romanNumerals: ['I', 'III', 'V', 'VII'],
  chordQuality: 'Major 7th',
};

const C_IONIAN_MODAL = {
  notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  formula: ['1', '2', '3', '4', '5', '6', '7'],
  character: 'Bright, happy, stable - the major scale',
  alterations: 'No alterations',
  commonUse: 'Pop, rock, classical - most common mode',
};

const F_SHARP_G_FLAT_MAJOR = {
  label: 'F♯/G♭ Major',
  notes: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
  chords: ['G♭maj7', 'A♭m7', 'B♭m7', 'C♭maj7', 'D♭7', 'E♭m7', 'Fm7♭5'],
  modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
  keySignature: '6 flats (B♭, E♭, A♭, D♭, G♭, C♭)',
};

test.describe('Major key exploration flow', () => {
  test('select key, verify content, and open/close chord & mode modals', async ({ page }) => {
    await page.goto('/');

    await selectKey(page, C_MAJOR.label);
    await expectKeyOverview(page, {
      notes: C_MAJOR.notes,
      chords: C_MAJOR.chords,
      modes: C_MAJOR.modes,
      keySignature: C_MAJOR.keySignature,
    });

    const chordDialog = await openChordModal(page, C_MAJOR.chords[0]);
    await expectBodyOverflow(page, 'hidden');
    await expectChordModal(chordDialog, CMAJ7_MODAL);
    await closeModal(chordDialog);
    await expectBodyOverflow(page, 'auto');

    const modeDialog = await openModeModal(page, C_MAJOR.modes[0], 'C Ionian');
    await expectModeModal(modeDialog, C_IONIAN_MODAL);
    await closeModal(modeDialog);
    await expectBodyOverflow(page, 'auto');

    await selectKey(page, F_SHARP_G_FLAT_MAJOR.label);
    await expectKeyOverview(page, {
      notes: F_SHARP_G_FLAT_MAJOR.notes,
      chords: F_SHARP_G_FLAT_MAJOR.chords,
      modes: F_SHARP_G_FLAT_MAJOR.modes,
      keySignature: F_SHARP_G_FLAT_MAJOR.keySignature,
    });

    await expect(page.locator('[role="dialog"]')).toHaveCount(0);
  });
});
