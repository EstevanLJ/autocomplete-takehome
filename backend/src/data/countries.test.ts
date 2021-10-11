import { getCountries, searchCountry } from "./countries";

test("getCountries returns filled array", async () => {
  const result = await getCountries();
  expect(result.length).toEqual(245);
});

test("getCountries first result is a country", async () => {
  const result = await getCountries();
  expect(result[0]).toEqual({
    country: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
  });
});

test("searchCountry returns filtered results", async () => {
  const result = await searchCountry("Andorra");
  expect(result[0]).toEqual({
    country: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
  });
});

test("searchCountry returns exact results", async () => {
  const result = await searchCountry("Andorra");
  expect(result.length).toEqual(1);
  expect(result[0]).toEqual({
    country: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
  });
});