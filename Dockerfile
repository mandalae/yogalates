FROM node:7

ENV YOGALATES_DB_URL yogalates-db

COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

CMD ["node", "server.js"]
