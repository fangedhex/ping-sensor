FROM node:lts-alpine
WORKDIR /app
ADD . .
RUN yarn install --frozen-lockfile && yarn build
CMD [ "node", "." ]
