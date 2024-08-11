# Step 1: Use an official Node.js image as a base image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code to the working directory
COPY . .

# Step 6: Expose the port on which the app will run
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "run" ,"dep"]
