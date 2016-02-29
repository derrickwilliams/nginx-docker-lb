## prepare
```bash
npm install
```

## build images
```bash
docker build -t swarmer -f Dockerfile.nodeapp .
docker build -t swarmer_nginx -f Dockerfile.nginx .
```

## start services
* *Depends on docker host running at 192.168.99.100*

```bash
docker-compose up
# nginx container listening on port 5555
```

## see it work
* go to http://192.168.99.100
