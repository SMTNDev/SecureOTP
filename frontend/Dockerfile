# Use Node.js LTS as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 for frontend
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "start"]
