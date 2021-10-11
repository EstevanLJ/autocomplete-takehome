# Autocomplete Example App

This is and autocomplete example app.

Technologies used:

Frontend:
- React
- Typescript

Backend:
- Node.js
- Express
- Typescript

UI tests:
- Cypress

## Running

```
docker-compose up -d
```

## Running UI tests

```
npm i
node_modules/.bin/cypress run --spec cypress/integration/autocomplete.spec.js
```

## Running Backend tests

```
cd backend
npm i
npm test
```

## Running Frontend tests

```
cd frontend
npm i
npm test
```