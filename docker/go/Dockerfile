
FROM golang:latest as build-stage
WORKDIR /usr/src/app
COPY app/ .
run go mod init hello && \
    go build -o Hello .

FROM scratch
COPY --from=build-stage /usr/src/app /bin

CMD ["Hello"]
