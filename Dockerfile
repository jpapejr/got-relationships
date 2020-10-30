FROM node:latest
ADD . /app
WORKDIR /app
RUN npm install -g grunt-cli bower eslint \
    && npm install \
    && bower install --allow-root \
    && grunt dist \
    && apt-get clean \
    && echo 'Finished installing dependencies'

FROM node:latest
RUN apt update \
    && apt install -y nginx \
    && apt upgrade patch subversion -y
COPY --from=0 /app/entrypoint.sh /entrypoint.sh
RUN sed -i 's/listen\(.*\)80 default_server;/listen 8081 default_server;/' /etc/nginx/sites-enabled/default \
    && sed -i '23d' /etc/nginx/sites-enabled/default

RUN chmod +x entrypoint.sh
COPY --from=0 /app/dist /var/www/html

ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 8081
