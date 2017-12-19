## Docker
### Build image
`docker build -t band-service .`

### Run image
`docker run -d -v $(pwd)/:/home/node/app -p 8888:8888 --net backend`

### test