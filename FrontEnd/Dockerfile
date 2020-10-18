FROM node:14.11.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3000/tcp

EXPOSE 80/tcp

#ENV CI true

CMD ["npm", "run", "start"]


# # pull official base image
# FROM node:14.11.0

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]

# # build environment
# FROM node:14.11.0
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install 
# RUN npm install react-scripts@3.4.1 -g 
# COPY . ./
# RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY . ./ConsoleApp

#COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]