FROM node:carbon
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . /src/app
EXPOSE 8080
RUN npm run build

