# Use Node.js as the base image
FROM node:18-alpine

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --save sharp
RUN npm update

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that Next.js is running on (default is 3000)
EXPOSE 3000
ENV PORT 3000

# Set the command to start the application
CMD ["npm", "start"]
