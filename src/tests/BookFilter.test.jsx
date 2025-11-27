import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("Testing BookList filter", () => {
  it("Mostra tutti i libri", () => {
    render(<BookList books={fantasy} />);
    const cards = screen.getAllByTestId("book-card");
    expect(cards).toHaveLength(fantasy.length);
  });

  it("Mostra i libri scrivendo sword", () => {
    render(<BookList books={fantasy} />);
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "sword" } });
    const filteredCards = screen.getAllByTestId("book-card");
    expect(filteredCards).toHaveLength(9);
  });

  it("Ricerca con 0 risultati", () => {
    render(<BookList books={fantasy} />);
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: "pupo" } });
    const filteredCards = screen.queryAllByTestId("book-card");
    expect(filteredCards).toHaveLength(0);
  });
});
