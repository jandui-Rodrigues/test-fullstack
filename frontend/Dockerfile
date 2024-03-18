FROM node:18-alpine

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8080

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]