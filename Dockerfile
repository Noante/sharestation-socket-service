FROM node:14
WORKDIR /app

COPY sharestation-socket-service/package*.json ./

ENV NODE_ENV=PROD

RUN npm install

COPY sharestation-socket-service/. .

EXPOSE 3004
ENTRYPOINT ["node", "/app/index.js"]