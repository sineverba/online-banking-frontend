include .env

IMAGE_NAME=registry.gitlab.com/cicdprojects/online-banking-frontend
CONTAINER_NAME=online-banking-frontend
APP_VERSION=0.6.3-dev
BUILDX_VERSION=0.9.1
BINFMT_VERSION=qemu-v7.0.0-28

sonar:
	docker-compose up sonarscanner

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

preparemulti:
	mkdir -vp ~/.docker/cli-plugins
	curl -L "https://github.com/docker/buildx/releases/download/v$(BUILDX_VERSION)/buildx-v$(BUILDX_VERSION).linux-amd64" > ~/.docker/cli-plugins/docker-buildx
	chmod a+x ~/.docker/cli-plugins/docker-buildx
	docker buildx version
	docker run --rm --privileged tonistiigi/binfmt:$(BINFMT_VERSION) --install all
	docker buildx ls
	docker buildx rm multiarch
	docker buildx create --name multiarch --driver docker-container --use
	docker buildx inspect --bootstrap --builder multiarch

build:
	npm run build
	docker build --tag $(IMAGE_NAME):$(APP_VERSION) --file dockerfiles/Dockerfile .
	rm -r build

multi:
	npm run build
	docker buildx build --platform linux/arm64/v8,linux/amd64,linux/arm/v6,linux/arm/v7 --tag $(IMAGE_NAME):$(APP_VERSION) --tag $(IMAGE_NAME):latest --push --file dockerfiles/Dockerfile .
	rm -r build

test:
	docker run --rm -it --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION) cat /etc/os-release | grep "Alpine Linux v3.16"
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(APP_VERSION)

destroy:
	docker image rm $(IMAGE_NAME):$(APP_VERSION)