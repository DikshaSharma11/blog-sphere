import { render, screen } from "@testing-library/react";
import BlogPostList from "../BlogPostList";

test("renders loading state", () => {
  render(<BlogPostList />);
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
