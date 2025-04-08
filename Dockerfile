# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json first (for caching)
COPY package*.json ./

# Install dependencies first
RUN npm install --production

# Copy remaining files
COPY . .

# Expose the application port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]