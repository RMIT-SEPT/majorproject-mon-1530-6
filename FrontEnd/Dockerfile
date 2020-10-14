# Step 1


FROM node:10-alpine as build-step


RUN mkdir /app


WORKDIR /app


COPY package.json /app


RUN npm install


COPY . /app


RUN npm run start