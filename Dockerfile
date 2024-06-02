# Use the official Node.js image.
FROM node:14-alpine

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application to the working directory.
COPY . .

# Build the React application.
RUN npm run build

# Install a lightweight web server to serve the React app.
RUN npm install -g serve

# Set the command to run the web server.
CMD ["serve", "-s", "build"]

# Expose the port that the app will run on.
EXPOSE 5000