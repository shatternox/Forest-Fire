FROM node

WORKDIR /forest-fire

COPY . .

RUN npm install

RUN npm config set fetch-retry-maxtimeout 120000

CMD ["npm", "start"]

