# syntax=docker/dockerfile:1.4
# Build Stage
FROM node:24-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# Which chatbot brain the built bundle uses: "local" (offline retrieval) or
# "gemini". Not a secret — it only selects a code path — so it travels as a
# build arg while the keys below travel as mounted secrets.
ARG VITE_CHATBOT_ENGINE=local
ENV VITE_CHATBOT_ENGINE=$VITE_CHATBOT_ENGINE

# Use a RUN command to make the secrets available as environment variables for the build
RUN --mount=type=secret,id=VITE_GEMINI_KEY_1 \
    --mount=type=secret,id=VITE_GEMINI_KEY_2 \
    --mount=type=secret,id=VITE_GEMINI_KEY_3 \
    --mount=type=secret,id=VITE_GEMINI_KEY_4 \
    VITE_GEMINI_KEY_1=$(cat /run/secrets/VITE_GEMINI_KEY_1) \
    VITE_GEMINI_KEY_2=$(cat /run/secrets/VITE_GEMINI_KEY_2) \
    VITE_GEMINI_KEY_3=$(cat /run/secrets/VITE_GEMINI_KEY_3) \
    VITE_GEMINI_KEY_4=$(cat /run/secrets/VITE_GEMINI_KEY_4) \
    npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
# SPA fallback + caching rules. Required: the app serves client-side routes
# (/modules/:id, /faq, /help), which 404 under nginx's default config.
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
