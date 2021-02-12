FROM        node:12
MAINTAINER  Brandon Marcachi - ACSEO <contact@acseo.fr>

#
# Here, we create working directory that will host application files.
#
RUN         mkdir -p /app/node_modules
COPY        . /app
RUN         chmod -R 755 /app/node_modules

#
# Finally, we setup working directory and volumes.
#
VOLUME      /app
WORKDIR     /app
