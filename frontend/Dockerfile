FROM node:14-alpine

WORKDIR /app

ENV PATH="/app/node_modules/.bin:$PATH"

COPY . .

RUN npm install

RUN chmod 777 ./node_modules

CMD ["npm", "start"]