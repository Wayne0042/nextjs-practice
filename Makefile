.PHONY: start-dev
start-dev: ## Start the development docker container.
	docker compose -f "docker-compose.dev.yaml" up -d --build

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f "docker-compose.dev.yaml" down

.PHONY: lint
lint:
	npm run lint