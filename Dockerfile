FROM node:10.15

WORKDIR /app

COPY *.json /app/
RUN npm install

COPY app.js /app/app.js

CMD node /app/app.js
