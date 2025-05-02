// __tests__/SeeAllPage.test.tsx
import { render, screen } from "@testing-library/react";
import SeeAllPage from "@/app/SeeAll/page";


describe("책 목록 페이지", () => {
  it("로딩 표시가 나타난다", () => {
    render(<SeeAllPage />);
    expect(screen.getByText(/로딩 중/i)).toBeInTheDocument();
  });
});
