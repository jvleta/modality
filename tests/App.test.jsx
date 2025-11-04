import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";
import {
  keyData,
  keyOrder,
  getChordDetails,
  generateModeNotes,
  modeCharacteristics,
} from "../src/data.js";

const selectKey = async (value) => {
  const user = userEvent.setup();
  const select = screen.getByRole("combobox", {
    name: /select a major key/i,
  });
  await user.selectOptions(select, value);
  return { user, select };
};

describe("App component", () => {
  test("renders default state with prompt and no key details", () => {
    render(<App />);

    const select = screen.getByRole("combobox", {
      name: /select a major key/i,
    });
    expect(select).toHaveDisplayValue("-- Choose a Key --");
    expect(select).toHaveValue("");

    expect(
      screen.getByRole("option", { name: "-- Choose a Key --" })
    ).toBeInTheDocument();

    expect(screen.queryByText(/scale notes/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /major$/i })).not.toBeInTheDocument();
  });

  test("selecting a key reveals its scale, chords, modes, and signature", async () => {
    render(<App />);
    const key = keyOrder[0];
    const keyInfo = keyData[key];

    await selectKey(key);

    expect(
      await screen.findByRole("heading", { name: keyInfo.name })
    ).toBeInTheDocument();
    expect(screen.getByText(keyInfo.keySignature)).toBeInTheDocument();

    keyInfo.notes.forEach((note) => {
      expect(screen.getAllByText(note).length).toBeGreaterThan(0);
    });

    keyInfo.seventhChords.forEach((chord) => {
      expect(
        screen.getByRole("button", { name: `View details for ${chord}` })
      ).toBeInTheDocument();
    });

    keyInfo.modes.forEach((mode) => {
      expect(
        screen.getByRole("button", { name: `View details for ${mode} mode` })
      ).toBeInTheDocument();
    });
  });

  test("changing the key scrolls the info section into view", async () => {
    render(<App />);
    const key = keyOrder[1];

    await selectKey(key);

    await waitFor(() => {
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
  });

  const openChordModal = async (user, chordName) => {
    const chordButton = screen.getByRole("button", {
      name: `View details for ${chordName}`,
    });
    await user.click(chordButton);
    const dialog = await screen.findByRole("dialog", { name: chordName });
    return { dialog, chordButton };
  };

  test("clicking a seventh chord opens a modal with detailed chord information", async () => {
    render(<App />);
    const { user } = await selectKey("C");
    const chordName = keyData.C.seventhChords[0];
    const { dialog } = await openChordModal(user, chordName);

    const { notes, romanNumerals, type } = getChordDetails(
      chordName,
      keyData.C.notes,
      0
    );

    notes.forEach((note) => {
      expect(screen.getAllByText(note).length).toBeGreaterThan(0);
    });

    romanNumerals.forEach((numeral) => {
      expect(screen.getByText(numeral)).toBeInTheDocument();
    });

    expect(screen.getByText(type)).toBeInTheDocument();
  });

  test("clicking a mode opens the modal with computed details", async () => {
    render(<App />);
    const { user } = await selectKey("C");
    const modeIndex = 1;
    const modeName = keyData.C.modes[modeIndex];
    const expectedTitle = `${keyData.C.notes[modeIndex]} ${modeName}`;

    const modeButton = screen.getByRole("button", {
      name: `View details for ${modeName} mode`,
    });
    await user.click(modeButton);

    const dialog = await screen.findByRole("dialog", { name: expectedTitle });
    expect(dialog).toBeInTheDocument();

    const modeNotes = generateModeNotes(keyData.C.notes, modeIndex);
    modeNotes.forEach((note) => {
      expect(screen.getAllByText(note).length).toBeGreaterThan(0);
    });

    const { formula, character, alterations, commonUse } =
      modeCharacteristics[modeName];
    formula.split(" ").forEach((degree) => {
      expect(screen.getByText(degree)).toBeInTheDocument();
    });

    expect(screen.getByText(character)).toBeInTheDocument();
    expect(screen.getByText(alterations)).toBeInTheDocument();
    expect(screen.getByText(commonUse)).toBeInTheDocument();
  });

  test("escape key, close button, and backdrop click close the modal and restore scrolling", async () => {
    render(<App />);
    const { user } = await selectKey("C");
    const chordName = keyData.C.seventhChords[0];
    const modalLifecycle = async () => openChordModal(user, chordName);

    const { dialog, chordButton } = await modalLifecycle();
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: chordName })).not.toBeInTheDocument()
    );
    await waitFor(() => expect(chordButton).toHaveFocus());
    expect(document.body.style.overflow).toBe("auto");

    const secondOpen = await modalLifecycle();
    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: chordName })).not.toBeInTheDocument()
    );
    await waitFor(() => expect(secondOpen.chordButton).toHaveFocus());
    expect(document.body.style.overflow).toBe("auto");

    const thirdOpen = await modalLifecycle();
    await user.click(thirdOpen.dialog);
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: chordName })).not.toBeInTheDocument()
    );
    await waitFor(() => expect(thirdOpen.chordButton).toHaveFocus());
    expect(document.body.style.overflow).toBe("auto");
  });

  test("background content is inert while a modal is open", async () => {
    render(<App />);
    const { user } = await selectKey("C");
    const chordName = keyData.C.seventhChords[0];
    const { dialog } = await openChordModal(user, chordName);

    const appContent = screen.getByTestId("app-content");
    expect(document.body.style.overflow).toBe("hidden");
    expect(appContent).toHaveAttribute("aria-hidden", "true");
    expect(appContent).toHaveAttribute("inert");

    await user.click(dialog);
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: chordName })).not.toBeInTheDocument()
    );
    expect(appContent).not.toHaveAttribute("aria-hidden");
    expect(appContent).not.toHaveAttribute("inert");
    expect(document.body.style.overflow).toBe("auto");
  });

  test("focus returns to the trigger button once a modal closes", async () => {
    render(<App />);
    const { user } = await selectKey("C");
    const chordName = keyData.C.seventhChords[0];
    const { chordButton } = await openChordModal(user, chordName);

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: chordName })).not.toBeInTheDocument()
    );
    await waitFor(() => expect(chordButton).toHaveFocus());
  });
});
