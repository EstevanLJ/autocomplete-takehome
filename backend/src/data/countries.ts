import { readFile } from "fs";

let countries: Country[];

export interface Country {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const getCountries = async (): Promise<Country[]> => {
  return new Promise(async (resolve, reject) => {
    if (countries) {
      return resolve(countries);
    }

    try {
      countries = await retrieveCountries();
    } catch (error) {
      return reject(error);
    }

    return resolve(countries);
  });
};

const retrieveCountries = async (): Promise<Country[]> => {
  return new Promise((resolve, reject) => {
    readFile("src/data/countries.csv", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
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
    });
  });
};
