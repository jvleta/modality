import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { keyData, keyOrder } from "../src/data";

beforeAll(() => {
  // Prevent scrollIntoView from throwing inside jsdom
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe("App component", () => {
  test("renders the default key information", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Major Keys Reference/i }),
    ).toBeInTheDocument();
    const defaultKey = keyData[keyOrder[0]].name;
    expect(
      screen.getByRole("heading", { name: defaultKey }),
    ).toBeInTheDocument();
  });

  test("updates the displayed key when a new selection is made", () => {
    render(<App />);
    const select = screen.getByLabelText(/Select a Major Key/i);
    const nextKey = keyOrder[1];

    fireEvent.change(select, { target: { value: nextKey } });

    expect(
      screen.getByRole("heading", { name: keyData[nextKey].name }),
    ).toBeInTheDocument();
  });

  test("opens and closes chord modal with details", () => {
    render(<App />);
    const defaultKey = keyOrder[0];
    const chordName = keyData[defaultKey].seventhChords[0];

    fireEvent.click(
      screen.getByRole("button", { name: `View details for ${chordName}` }),
    );

    expect(
      screen.getByRole("heading", { name: chordName }),
    ).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Close/i }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("opens mode modal with the expected title", () => {
    render(<App />);
    const defaultKey = keyOrder[0];
    const modeName = keyData[defaultKey].modes[0];

    fireEvent.click(
      screen.getByRole("button", { name: `View details for ${modeName} mode` }),
    );

    expect(
      screen.getByRole("heading", {
        name: `${keyData[defaultKey].notes[0]} ${modeName}`,
      }),
    ).toBeInTheDocument();
  });

  test("closes chord and mode modals when Escape is pressed", () => {
    render(<App />);
    const defaultKey = keyOrder[0];
    const chordName = keyData[defaultKey].seventhChords[0];
    const modeName = keyData[defaultKey].modes[0];

    fireEvent.click(
      screen.getByRole("button", { name: `View details for ${chordName}` }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: `View details for ${modeName} mode` }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
