FROM nginx:1.27.2-alpine3.20

MAINTAINER Apinan

COPY ./build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
