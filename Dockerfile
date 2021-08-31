FROM node:12

# ENV USER node
ENV HOME /home/node
ENV APP $HOME/app

# RUN mkdir -p $APP
RUN mkdir -p $APP
RUN chmod -R 777 $HOME

RUN npm install -g @angular/cli

USER node
WORKDIR $APP
COPY . $APP

# CMD "/bin/bash"