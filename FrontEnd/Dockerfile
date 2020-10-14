# pull official base image
FROM node:latest 

# set working directory
WORKDIR /app
COPY package.json ./
RUN npm install
#--silent
#RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

# start app
CMD ["npm", "run", "start"]

# Step 1


# FROM node:latest


# RUN mkdir -p /usr/src/app


# COPY package.json /usr/src/app


# RUN npm install

# ADD src /usr/src/app/src
# ADD public /usr/src/app/public


# RUN npm build

# CMD [ "npm", "start" ]