FROM node:7

COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

CMD ["node", "server.js"]
