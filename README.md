## build images
```bash
docker build -t swarmer -f Dockerfile.nodeapp .
docker build -t swarmer_nginx -f Dockerfile.nginx .
```

## start services
```bash
docker-compose up
```
