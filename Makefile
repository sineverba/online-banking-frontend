include .env

IMAGE_NAME=registry.gitlab.com/cicdprojects/online-banking-frontend
CONTAINER_NAME=online-banking-frontend
APP_VERSION=1.2.1-dev
NODE_VERSION=20.11.0
NPM_VERSION=10.3.0
NGINX_VERSION=1.25.3
SONARSCANNER_VERSION=5.0.1
BUILDX_VERSION=0.12.1


sonar:
	docker run --rm -it \
		--name $(CONTAINER_NAME)-sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_LOGIN=$(SONAR_TOKEN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u \
		-x @reduxjs/toolkit \
		-x msw \
		-x react-redux
	npx update-browserslist-db@latest
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

preparemulti:
	mkdir -vp ~/.docker/cli-plugins
	curl -L "https://github.com/docker/buildx/releases/download/v$(BUILDX_VERSION)/buildx-v$(BUILDX_VERSION).linux-amd64" > ~/.docker/cli-plugins/docker-buildx
	chmod a+x ~/.docker/cli-plugins/docker-buildx
	docker buildx create --name multiarch --use

deletecache:
	docker builder prune

build:
	docker build \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg NPM_VERSION=$(NPM_VERSION) \
		--build-arg NGINX_VERSION=$(NGINX_VERSION) \
		--tag $(IMAGE_NAME):$(APP_VERSION) \
		--file dockerfiles/production/build/docker/Dockerfile \
		"."

multi:
	docker buildx build \
		--platform linux/amd64,linux/arm/v6,linux/arm/v7,linux/arm64 \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg NPM_VERSION=$(NPM_VERSION) \
		--build-arg NGINX_VERSION=$(NGINX_VERSION) \
		--tag $(IMAGE_NAME):$(APP_VERSION) \
		--tag $(IMAGE_NAME):latest \
		--push \
		--file dockerfiles/production/build/docker/Dockerfile "."

test:
	docker run --rm -it $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "Alpine Linux v3.18"
	docker run --rm -it $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "VERSION_ID=3.18.5"
	docker run --rm -it $(IMAGE_NAME):$(APP_VERSION) nginx -v | grep $(NGINX_VERSION)
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION)

destroy:
	docker image rm $(IMAGE_NAME):$(APP_VERSION)