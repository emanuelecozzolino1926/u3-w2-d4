import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("Test Booklist Component", () => {
  it("Controllo bookcards quanti sono i libri", () => {
    render(<BookList books={fantasy} />);
    const cards = screen.getAllByTestId("book-card");
    expect(cards).toHaveLength(fantasy.length);
  });
});
