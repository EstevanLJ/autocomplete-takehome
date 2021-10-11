import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Country } from "../../interfaces";
import { search } from "../../services/countryApi";
import Autocomplete from "./Autocomplete";

jest.mock("../../services/countryApi", () => {
  const countries: Country[] = [
    {
      name: "Brazil",
      country: "BR",
      latitude: 0.0,
      longitude: 0.0,
    },
  ];

  return {
    search: jest.fn(() => Promise.resolve(countries)),
  };
});

test("renders label", () => {
  let label = "Select your country";
  let onChange = () => null;

  render(<Autocomplete label={label} onChange={onChange} />);
  const linkElement = screen.getByText(label);
  expect(linkElement).toBeInTheDocument();
});

test("searches country", async () => {
  let label = "Select your country";
  let onChange = () => null;

  render(<Autocomplete label={label} onChange={onChange} />);

  const inputElement = screen.getByTestId("autocomplete-input");

  fireEvent.change(inputElement, { target: { value: "Brazil" } });

  await waitFor(() => expect(CountryAPI.search).toHaveBeenCalledTimes(1));

  const resultElement = screen.getByTestId("autocomplete-result-BR");

  expect(search).toBeCalled();
  expect(resultElement).toBeInTheDocument();
});
