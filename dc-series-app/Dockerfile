FROM node:latest

RUN npm install -g serve
CMD serve -s build

EXPOSE 5000

COPY package.json .
RUN npm install

COPY . .

RUN npm run build --production