FROM node:16.19-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

ENV PORT_APP=3000

EXPOSE $PORT_APP

# will create an anonymous volume 
# it will be useful when using bind mounts to not override node_modules from host machine
VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
