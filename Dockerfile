FROM node:14
WORKDIR /app

COPY sharestation-socket-service/package*.json ./

ENV NODE_ENV=PROD
ENV PORT=3004
ENV KEY=testjwt

RUN npm install

COPY sharestation-socket-service/. .

EXPOSE 3004
ENTRYPOINT ["node", "/app/index.js"]