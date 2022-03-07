include .env

IMAGE_NAME=registry.gitlab.com/private-registry/online-banking-frontend
CONTAINER_NAME=online-banking-frontend

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
	docker build --tag $(IMAGE_NAME):$(REACT_APP_VERSION) --tag $(IMAGE_NAME):latest .
	
run:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(REACT_APP_VERSION)

destroy:
	docker image rm $(IMAGE_NAME):$(REACT_APP_VERSION) $(IMAGE_NAME):latest