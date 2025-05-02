//__test__/BookCard.test.tsx
import { render, screen } from "@testing-library/react";
import BookCard from "@/components/BookCard";  
import type { Book } from "@/types/book";  

const mockBook: Book = {
  _id: "1",
  title: "테스트 책",
  author: "홍길동",
  stock: 5,
  price: 10000,
  description: "테스트 설명",
};

describe("BookCard", () => {
  it("책 제목 표시", () => {
    render(<BookCard book={mockBook} />);
    expect(screen.getByText("테스트 책")).toBeInTheDocument();
  });
});