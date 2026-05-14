FROM node:22-bookworm-slim AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:22-bookworm-slim AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production \
    && yarn cache clean \
    && rm -rf /usr/local/lib/node_modules/npm \
    && rm -f /usr/local/bin/npm /usr/local/bin/npx

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 4000
CMD ["node", "dist/main.js"]
