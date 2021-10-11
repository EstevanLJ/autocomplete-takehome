import { Application, Request, Response } from "express";
import { Country, getCountries, searchCountry } from "../data/countries";

const countryController = (app: Application): Application => {
  app.get("/search", async (req: Request, res: Response) => {
    let query: string = String(req.query.q).toUpperCase();

    try {
      let results: Country[] = await searchCountry(query);

      res.send({ results });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return app;
};

export default countryController;
