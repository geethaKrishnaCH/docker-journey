FROM node:16.19-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

VOLUME [ "/app/feedback" ]

CMD [ "npm", "start" ]
