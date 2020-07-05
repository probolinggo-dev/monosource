FROM node:10.20.1-alpine3.10

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

CMD [ "yarn", "start" ]
