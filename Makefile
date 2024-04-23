IMAGE_NAME=registry.gitlab.com/cicdprojects/online-banking-frontend
CONTAINER_NAME=online-banking-frontend
VERSION=1.3.0-dev
NODE_VERSION=20.12.1
NPM_VERSION=10.5.1
NGINX_VERSION=1.25.4
SONARSCANNER_VERSION=5.0.1
BUILDX_VERSION=0.13.1


sonar:
	docker run --rm -it \
		--name $(CONTAINER_NAME)-sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_TOKEN=$(SONAR_TOKEN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu \
		-x eslint \
		-u
	npx update-browserslist-db@latest
	npm install
	npm audit fix

fixnodesass:
	npm rebuild node-sass

build:
	docker build \
		--no-cache \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg NPM_VERSION=$(NPM_VERSION) \
		--build-arg NGINX_VERSION=$(NGINX_VERSION) \
		--tag $(IMAGE_NAME):$(VERSION) \
		--file dockerfiles/production/build/Dockerfile \
		"."

preparemulti:
	mkdir -vp ~/.docker/cli-plugins
	curl \
		-L \
		"https://github.com/docker/buildx/releases/download/v$(BUILDX_VERSION)/buildx-v$(BUILDX_VERSION).linux-amd64" \
		> \
		~/.docker/cli-plugins/docker-buildx
	chmod a+x ~/.docker/cli-plugins/docker-buildx
	docker buildx create --name multiarch --use

multi: preparemulti
	docker buildx build \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg NPM_VERSION=$(NPM_VERSION) \
		--build-arg NGINX_VERSION=$(NGINX_VERSION) \
		--platform linux/arm64/v8,linux/amd64,linux/arm/v6,linux/arm/v7 \
		--tag $(IMAGE_NAME):$(VERSION) \
		--file dockerfiles/production/build/docker/Dockerfile \
		"."

test:
	docker run --rm -it $(IMAGE_NAME):$(VERSION) cat /etc/os-release | grep "Alpine Linux v3.18"
	docker run --rm -it $(IMAGE_NAME):$(VERSION) cat /etc/os-release | grep "VERSION_ID=3.18.5"
	docker run --rm -it $(IMAGE_NAME):$(VERSION) nginx -v | grep $(NGINX_VERSION)

inspect:
	docker run \
	--rm -it \
	--entrypoint /bin/sh \
	--name $(CONTAINER_NAME) \
	$(IMAGE_NAME):$(VERSION)
	
spin:
	docker container run -it --rm --publish 8080:80 --name $(CONTAINER_NAME) $(IMAGE_NAME):$(VERSION)

destroy:
	# Remove all images with no current tag
	docker rmi $$(docker images $(IMAGE_NAME):* --format "{{.Repository}}:{{.Tag}}" | grep -v '$(VERSION)') || exit 0;
	# Remove all node images
	docker rmi $$(docker images node --format "{{.Repository}}:{{.Tag}}") || exit 0;
	# Remove all Nginx images
	docker rmi $$(docker images nginx --format "{{.Repository}}:{{.Tag}}") || exit 0;
	# Remove all dangling images
	docker rmi $$(docker images -f "dangling=true" -q) || exit 0;