# Dockerfile (ở ./frontend/)
FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.23.3
COPY --from=build /app/build  /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf