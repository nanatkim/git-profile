import "@testing-library/jest-dom/extend-expect";
import Header from "../components/Header";
import { renderWithRouter } from "../utils/renderWithRouter";

describe("Header", () => {
  test("should render Header", () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText("Git Profile")).toBeInTheDocument();
  });
});
