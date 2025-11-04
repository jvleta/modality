const { expect } = require('@playwright/test');

async function selectKey(page, keyLabel) {
  const dropdown = page.getByLabel(/Select a major key/i);
  await dropdown.waitFor();
  await dropdown.selectOption({ label: keyLabel });
  await expect(
    page.getByRole('heading', { level: 2, name: keyLabel })
  ).toBeVisible();
}

async function expectKeyOverview(page, { notes, chords, modes, keySignature }) {
  const scaleNotes = page.locator('#scaleNotes .tag-pill');
  await expect(scaleNotes).toHaveCount(notes.length);
  await expect(scaleNotes).toHaveText(notes);

  await expect(page.locator('#keySignature')).toHaveText(keySignature);

  const chordButtons = page.locator('#seventhChords button');
  await expect(chordButtons).toHaveCount(chords.length);
  await expect(chordButtons).toContainText(chords);

  const modeButtons = page.locator('#modes button');
  await expect(modeButtons).toHaveCount(modes.length);
  await expect(modeButtons).toContainText(modes);
}

async function openChordModal(page, chordName) {
  await page
    .getByRole('button', { name: `View details for ${chordName}` })
    .click();

  const dialog = page.getByRole('dialog', { name: chordName });
  await expect(dialog).toBeVisible();
  return dialog;
}

async function expectChordModal(dialog, { notes, romanNumerals, chordQuality }) {
  const notePills = dialog.locator('text=Notes').locator('..').locator('.tag-pill');
  await expect(notePills).toHaveCount(notes.length);
  await expect(notePills).toHaveText(notes);

  const degreePills = dialog
    .locator('text=Scale Degrees')
    .locator('..')
    .locator('.tag-pill-muted');
  await expect(degreePills).toHaveCount(romanNumerals.length);
  await expect(degreePills).toHaveText(romanNumerals);

  await expect(
    dialog.locator('text=Chord Quality').locator('..').locator('.tag-pill-muted')
  ).toHaveText(chordQuality);
}

async function openModeModal(page, modeName, expectedTitle) {
  await page
    .getByRole('button', { name: `View details for ${modeName} mode` })
    .click();

  const dialog = page.getByRole('dialog', { name: expectedTitle });
  await expect(dialog).toBeVisible();
  return dialog;
}

async function expectModeModal(dialog, { notes, formula, character, alterations, commonUse }) {
  const notePills = dialog.locator('text=Mode Notes').locator('..').locator('.tag-pill');
  await expect(notePills).toHaveCount(notes.length);
  await expect(notePills).toHaveText(notes);

  const formulaPills = dialog
    .locator('text=Mode Formula')
    .locator('..')
    .locator('.tag-pill-muted, .tag-pill-amber');
  await expect(formulaPills).toHaveCount(formula.length);
  await expect(formulaPills).toHaveText(formula);

  await expect(
    dialog.locator('text=Character').locator('..').locator('p')
  ).toHaveText(character);
  await expect(
    dialog.locator('text=Alterations').locator('..').locator('p')
  ).toHaveText(alterations);
  await expect(
    dialog.locator('text=Common Use').locator('..').locator('p')
  ).toHaveText(commonUse);
}

async function closeModal(dialog) {
  await dialog.getByRole('button', { name: 'Close' }).click();
  await expect(dialog).toBeHidden();
}

async function expectBodyOverflow(page, value) {
  await expect
    .poll(async () => page.evaluate(() => document.body.style.overflow))
    .toBe(value);
}

module.exports = {
  selectKey,
  expectKeyOverview,
  openChordModal,
  expectChordModal,
  openModeModal,
  expectModeModal,
  closeModal,
  expectBodyOverflow,
};
