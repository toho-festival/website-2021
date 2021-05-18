FROM node:alpine AS builder

WORKDIR /app
ARG MODE

COPY . .
RUN yarn install --immutable --inline-builds && NODE_ENV=$MODE yarn build

FROM node:alpine AS runner

WORKDIR /app

ARG MODE

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY ./server.js ./next.config.js ./.yarnrc.yml ./package.json ./yarn.lock ./.pnp.js ./

ENV PORT=8080 NODE_ENV=$MODE

CMD yarn start
