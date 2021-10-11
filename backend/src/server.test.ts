import app from "./server";
import supertest from 'supertest'

test("GET /search returns exact result", async () => {
  await supertest(app)
    .get("/search?q=Andorra")
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body.results)).toBeTruthy();
      expect(response.body.results.length).toEqual(1);
      expect(response.body.results[0].name).toBe('Andorra');
    });
});

test("GET /search returns maximum of 100 result", async () => {
  await supertest(app)
    .get("/search?q=")
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body.results)).toBeTruthy();
      expect(response.body.results.length).toEqual(100);
    });
});