import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";
import { renderWithRouter } from "../utils/renderWithRouter";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe("Header", () => {
  test("should render Header", () => {
    const { getByText } = renderWithRouter(<Header />);

    expect(getByText("Git Profile")).toBeInTheDocument();
  });

  test("should change input value", () => {
    renderWithRouter(<Header />);
    const input = screen.getByLabelText("username/reponame");

    fireEvent.change(input, { target: { value: "nanatkim" } });

    expect(hasInputValue(input, "nanatkim")).toBeTruthy();
  });

  test("should clean input search when navigating through Git Profile", () => {
    renderWithRouter(<Header />, { route: "nanatkim" });
    const input = screen.getByLabelText("username/reponame");

    fireEvent.click(screen.getByText("Git Profile"));

    expect(hasInputValue(input, "")).toBeTruthy();
  });
});
