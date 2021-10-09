FROM node:16-alpine

# USER node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
# COPY package.json ./
# COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@4.0.3 -g --silent

# RUN chown -R node: /app
# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN chmod -R 755 node_modules

CMD ["npm", "start"]