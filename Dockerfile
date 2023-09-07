FROM node:latest

EXPOSE 8080

WORKDIR /app-node

COPY . .

RUN yarn install

RUN yarn run build

CMD [ "node", "dist/index.js" ]