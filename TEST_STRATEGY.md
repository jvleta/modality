# Test Strategy

## Context
- React single-page app that lets musicians explore major keys, seventh chords, and modal characteristics.
- Core behaviours: selecting a key populates scale metadata, clicking list entries opens modals with detailed content, keyboard shortcuts and scroll management keep UX smooth.
- Business priorities: accuracy of musical data, reliable modal interactions, and an accessible learning experience.

## Current Coverage Snapshot
- `tests/data.test.js` exercises `generateModeNotes` rotation logic and `getChordDetails` for a few representative chords.
- No automated coverage for React components, modal interactions, styling regressions, or accessibility.

## Risk Areas To Target
- **Data accuracy**: incorrect spellings, rotated modes, or chord formulas silently degrade trust.
- **State flow**: key selection should reset modals, scroll to content, and update dependent sections consistently.
- **Modal UX**: close triggers (overlay click, Escape key, buttons) and focus/scroll handling can regress easily.
- **Accessibility**: modal semantics, keyboard navigation, and contrast must remain compliant.
- **Responsive layout**: Tailwind utility classes drive layout; visual regressions may slip in without checks.

## Recommended Tooling
- **Unit/Component**: Jest + React Testing Library (already available via Jest).
- **Integration/E2E**: Playwright or Cypress for browser-level flows (choose based on team preference).
- **Accessibility**: `@testing-library/jest-dom` + `axe-core` (or `jest-axe`) for automated a11y assertions; manual screen-reader smoke tests.
- **Visual Regression (optional)**: Chromatic, Percy, or Playwright trace viewer for responsive snapshots.

## Checklist

### Unit Tests
- [ ] `generateModeNotes` handles every mode index (0–6) without duplicates and preserves order for each key.
- [ ] `getChordDetails` returns the correct chord quality, note stack, and roman numerals for all chord types.
- [ ] `getChordType` detects `maj7`, `m7`, dominant `7`, and `m7♭5` chords even with accidentals in the root.
- [ ] Guardrail for accidental key data mutations (e.g., freeze `keyData` in tests or validate shape against schema).
- [ ] Snapshot/fixture validation that every `keyData` entry exposes the expected fields and array lengths.

### Component Tests (React Testing Library)
- [ ] App renders default state with dropdown prompt and no key details.
- [ ] Selecting each key updates scale notes, seventh chords, modes, and signature text.
- [ ] Key change scrolls the info section into view (mock `scrollIntoView`).
- [ ] Clicking a chord opens the modal with the correct chord title, note list, and roman numerals.
- [ ] Clicking a mode opens the modal with computed title, note rotation, formula chips, and descriptive text.
- [ ] Escape key, close button, and backdrop click close the active modal and restore document scrolling.
- [ ] When a modal is open, background content is inert (aria-hidden and `overflow` toggling tested).
- [ ] Focus returns to the triggering element once a modal closes.

### Integration / End-to-End (Playwright or Cypress)
- [ ] Full flow: select key → verify updated content → open/close chord modal → open/close mode modal.
- [ ] Keyboard-only navigation of dropdown and modals (Tab/Shift+Tab cycling, Enter/Space activation).
- [ ] Responsive checks at mobile, tablet, and desktop breakpoints for layout of cards and modal.
- [ ] Regression flow ensuring modals do not stack and body scroll is restored after closure.

### Accessibility & Usability
- [ ] Axe-automated scan finds no violations for main screens or modals.
- [ ] Manual screen reader check confirms descriptive labels (`aria-labelledby`, close button SR text) and reading order.
- [ ] Color contrast verification for gradient backgrounds, tag pills, and text.
- [ ] Verify focus trap within modals (consider adding focus-trap utility if absent).

### Performance & Resilience
- [ ] Basic performance smoke (Lighthouse or Web Vitals) to ensure bundle stays fast after new assets.
- [ ] Test that rapid key switching or modal toggling does not throw errors (simulate quick successive clicks).
- [ ] Ensure console stays clean (no stray logs, warnings, or uncaught errors) during tests.

### Maintenance Practices
- [ ] Add Jest watch task to CI (e.g., GitHub Actions) with coverage thresholds for utility modules.
- [ ] Consider Storybook stories for cards and modals to support visual + interaction tests.
- [ ] Set up Prettier/ESLint hooks if not already enforced to catch slips before testing.

