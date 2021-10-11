FROM node:14-alpine

WORKDIR /app

ENV PATH="/app/node_modules/.bin:$PATH"

COPY . .

RUN npm install

RUN chmod 777 ./node_modules

RUN rm -Rf ./dist

RUN npm run build

CMD ["npm", "start"]