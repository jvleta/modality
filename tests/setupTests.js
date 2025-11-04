import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
});

afterEach(() => {
  cleanup();
  document.body.style.overflow = "auto";
});
