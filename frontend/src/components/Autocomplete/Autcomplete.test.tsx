import { render, screen } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

test("renders label", () => {
  let label = "Select your country";
  let onChange = () => null;

  render(<Autocomplete label={label} onChange={onChange} />);
  const linkElement = screen.getByText(label);
  expect(linkElement).toBeInTheDocument();
});
