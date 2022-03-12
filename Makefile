include .env

IMAGE_NAME=registry.gitlab.com/private-registry/online-banking-frontend
CONTAINER_NAME=online-banking-frontend
APP_VERSION=0.2.0

dc:
	docker-compose --profile dev up -d 

sonar:
	docker-compose start sonarscanner && docker-compose logs -f sonarscanner

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix

build:
	docker build --tag $(IMAGE_NAME):$(APP_VERSION) --tag $(IMAGE_NAME):latest .

spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(REACT_APP_VERSION)

deploy:
	docker push $(IMAGE_NAME):latest

destroy:
	docker image rm $(IMAGE_NAME):$(APP_VERSION) $(IMAGE_NAME):latest