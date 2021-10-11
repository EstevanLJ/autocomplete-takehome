import {
  Country,
  getCountries,
  searchCountry,
  retrieveCountries,
} from "./countries";

let exampleCoutry = {
  country: "AD",
  latitude: 42.546245,
  longitude: 1.601554,
  name: "Andorra",
};

test("getCountries returns filled array", async () => {
  const result = await getCountries();
  expect(result.length).toEqual(245);
});

test("getCountries first result is a country", async () => {
  const result = await getCountries();
  expect(result[0]).toEqual(exampleCoutry);
});

test("searchCountry returns filtered results", async () => {
  expect(await searchCountry("andorra")).toEqual([exampleCoutry]);
  expect(await searchCountry("ANDORRA")).toEqual([exampleCoutry]);
});

test("searchCountry returns maximum of 100 results", async () => {
  let result = await searchCountry("");
  expect(result.length).toEqual(100);
});

test("searchCountry returns no results", async () => {
  expect(await searchCountry("azadsa")).toEqual([]);
  expect(await searchCountry("8das8x8")).toEqual([]);
});

test("retrieveCountries returns all countries", async () => {
  let results: Country[] = await retrieveCountries();
  expect(results.length).toEqual(245);
});
