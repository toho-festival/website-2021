FROM node:alpine AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine as builder

ARG MODE

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN NODE_ENV=$MODE yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:alpine AS runner

WORKDIR /app

ARG MODE

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY ./server.js ./next.config.js ./

ENV PORT=8080 NODE_ENV=$MODE

CMD ["node", "./server.js"]
