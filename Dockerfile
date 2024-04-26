FROM node:14

WORKDIR /tokens-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start