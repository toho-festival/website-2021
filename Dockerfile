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
COPY --from=builder /app/server.js /app/next.config.js /app/.yarnrc.yml /app/package.json /app/yarn.lock /app/.pnp.js ./

ENV PORT=8080 NODE_ENV=$MODE

CMD ["yarn", "node", "./server.js"]
