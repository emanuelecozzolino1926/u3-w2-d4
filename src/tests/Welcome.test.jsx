import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("Test Welcome Component", () => {
  it("Controlla se si monta correttamente", () => {
    render(<Welcome />);

    const title = screen.getByText(/benvenuti in epibooks!/i);

    expect(title).toBeInTheDocument();
  });
});
