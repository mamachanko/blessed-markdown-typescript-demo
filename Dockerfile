FROM alpine:latest

RUN apk add npm yarn

ADD package.json hello-markdown.ts /

RUN yarn

ENTRYPOINT [ "npx", "ts-node", "hello-markdown.ts" ]