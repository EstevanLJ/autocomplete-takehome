import { readFile } from "fs";

let countries: Country[];

export interface Country {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const searchCountry = async (query: string): Promise<Country[]> => {
  let countries: Country[] = await getCountries();

  let term = query.toUpperCase();

  let filtered = countries.filter((country: Country) => {
    return country.name.toUpperCase().indexOf(term) == 0;
  });

  return filtered.slice(0, 100);
};

export const getCountries = async (): Promise<Country[]> => {
  if (countries) {
    return countries;
  }

  countries = await retrieveCountries();

  return countries;
};

export const retrieveCountries = async (): Promise<Country[]> => {
  return new Promise((resolve, reject) => {
    readFile(
      "src/data/countries.csv",
      "utf8",
      (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          return reject();
        }

        let countries: Country[] = data.split("\n").map((country: string) => {
          let countryData: string[] = country.split(",");
          return {
            country: String(countryData[0]),
            latitude: parseFloat(countryData[1]),
            longitude: parseFloat(countryData[2]),
            name: String(countryData[3]),
          };
        });

        resolve(countries);
      }
    );
  });
};
