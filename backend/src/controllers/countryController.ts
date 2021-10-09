import { Application, Request, Response } from "express";
import { Country, getCountries } from "../data/countries";

const countryController = (app: Application): Application => {
  app.get("/search", async (req: Request, res: Response) => {
    let query: string = String(req.query.q).toUpperCase();

    try {
      let countries: Country[] = await getCountries();

      let results: Country[] = countries.filter((country: Country) => {
        return country.name.toUpperCase().indexOf(query) == 0;
      });

      res.send({ results });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return app;
};

export default countryController;
