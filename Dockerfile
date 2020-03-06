FROM node:latest as base

MAINTAINER Jake Hamilton <jake@intergalactic.email>

COPY ./package.json /tmp/package.json
COPY ./yarn.lock /tmp/yarn.lock

RUN cd /tmp && \
    yarn && \
    mkdir -p /opt/src && \
    cp -a /tmp/node_modules /opt/src/node_modules

COPY . /opt/src

RUN cd /opt/src && \
    yarn build

FROM m4rcu5/lighttpd:latest

COPY --from=base /opt/src/build /var/www/localhost/htdocs
