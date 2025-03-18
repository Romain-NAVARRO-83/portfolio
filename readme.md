docker compose up -d

## enter app container
docker exec -it $(docker ps -qf "name=app") bash

## Migration & Seeding
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate --config config/config.mjs
npx sequelize-cli db:seed:all --config config/config.mjs


## Prune
docker system prune -a --volumes

docker rm -f $(docker ps -aq)
