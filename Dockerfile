FROM node:14-alpine
WORKDIR /
COPY ./ ./
RUN npm config set package-lock false
RUN npm install --silence --loglevel=error
CMD ["npm","run","start"]