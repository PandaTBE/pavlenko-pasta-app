FROM node:22.11.0

WORKDIR /src

COPY package.json .
COPY package-lock.json .

ARG NEXT_PUBLIC_BASE_API_URL
ARG NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL
ENV NEXT_PUBLIC_BASE_API_URL=$NEXT_PUBLIC_BASE_API_URL
ENV NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL=$NEXT_PUBLIC_SERVER_SIDE_BASE_API_URL

RUN npm ci

COPY . .

RUN npm run build
