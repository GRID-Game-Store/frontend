FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3030

# FROM base as builder
# WORKDIR /app
# COPY . .
# RUN npm run build
# CMD npm start

# FROM base as production
# WORKDIR /app



# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# USER nextjs


# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public

# CMD npm start

FROM base as dev
ENV NODE_ENV=development
RUN rm -rf node_modules
RUN npm install --force
COPY . .
CMD npm run dev