FROM node:20

WORKDIR /tokens-api
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start