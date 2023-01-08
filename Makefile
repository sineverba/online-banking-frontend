include .env

IMAGE_NAME=registry.gitlab.com/private-registry/online-banking-frontend
CONTAINER_NAME=online-banking-frontend
APP_VERSION=0.5.0-dev

sonar:
	docker-compose up sonarscanner

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

build:
	docker build --tag $(IMAGE_NAME):$(APP_VERSION) .

test:
	docker run --rm -it --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "Alpine Linux v3.16"
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION)

destroy:
	docker image rm $(IMAGE_NAME):$(APP_VERSION)