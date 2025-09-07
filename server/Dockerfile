# Stage 1: Use Node.js to build and run
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the port your backend runs on
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
