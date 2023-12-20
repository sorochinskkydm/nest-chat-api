FROM node
WORKDIR /app
COPY package*.json ./ 
RUN npm install
COPY . .
ENV PORT 9000
EXPOSE ${PORT}
CMD ["npm", "run", "start:dev"]