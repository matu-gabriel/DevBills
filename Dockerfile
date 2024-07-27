FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3333

ENV NODE_NO_WARNINGS=1

CMD [ "npm", "run", "dev" ]