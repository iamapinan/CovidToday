FROM nginx:1.22.0-alpine

MAINTAINER Apinan

COPY ./build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
