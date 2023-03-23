FROM node:18-alpine
WORKDIR /shopping-admin
COPY . .
RUN yarn install --production
CMD ["node", "src/index.tsx"]
EXPOSE 3000