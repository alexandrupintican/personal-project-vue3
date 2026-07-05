# Uses node latest as base image
FROM node:lts-alpine

# Start from app directory
WORKDIR /app

# install vite global
RUN yarn global add vite

# Copy package and package-lock json
COPY package.json yarn.lock ./

# Install app dependecies
RUN yarn

# Copy the rest of our app into the container
COPY . .

# Set port environment
ENV PORT=3000

# port expose
EXPOSE 3000
CMD ["yarn", "dev"]