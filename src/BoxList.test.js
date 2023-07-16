import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot;
});

it("should add new item", function () {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const height = getByLabelText("Height:");
  const width = getByLabelText("Width:");
  const bgColor = getByLabelText("Background Color");
  const btn = queryByText("Add Box");
  expect(document.querySelector(".red")).not.toBeInTheDocument();
  fireEvent.change(height, { target: { value: 50 } });
  fireEvent.change(width, { target: { value: 50 } });
  fireEvent.change(bgColor, { target: { value: "red" } });
  fireEvent.click(btn);
  expect(document.querySelector(".red")).toBeInTheDocument();
});
