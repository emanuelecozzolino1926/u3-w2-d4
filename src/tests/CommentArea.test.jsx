import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CommentArea from "../components/CommentArea";

describe("Testing CommentArea Component", () => {
  it("Controlla se si renderizza correttamente", () => {
    render(<CommentArea asin={null} />);
    const commentInput = screen.getByPlaceholderText(/inserisci qui il testo/i);
    expect(commentInput).toBeInTheDocument();
  });
});
