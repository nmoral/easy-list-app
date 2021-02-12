# Author Brandon Marcachi <brandon.marcachi@acseo-conseil.fr>

#
# Env
#
-include .env

ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

DEFAULT_PROJECT_NAME=project

#
##@ HELP
#

.PHONY: all test clean help
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.DEFAULT_GOAL := help

author:  ## Display author identity
	@echo "Brandon Marcachi - ACSEOLAB | <brandon.marcachi@acseo-conseil.fr>";

#
##@ INSTALLATION
#

install: ## install
	@echo '\n############################\n';
	@echo 'Welcome on $(DEFAULT_PROJECT_NAME) !\n';
	@echo '###########################\n';
	@echo "### FIRST STEP : ENVIRONMENT\n" ;
	@${MAKE} env;
	@echo "\n### SECOND STEP : DOCKER FILES \n" ;
	@${MAKE} docker-files;
	@${MAKE} hosts;
	@echo "\n### THIRD STEP : RUN CONTAINERS \n" ;
	@docker-compose up -d --build --remove-orphans;
	@echo "\n### LAST STEP : INSTALL NPM DEPENDENCIES \n" ;
	@${MAKE} npm-i;
	@echo "\n Installation finished !";

env: ## Set env vars for dev mode
	@if [ -f docker/dist/.env ] && [ ! -f .env ]; then \
		echo "What is your projet name ? [default: $(DEFAULT_PROJECT_NAME)]";\
		read projectname; \
		if [ -z $$projectname ]; then \
			projectname="$(DEFAULT_PROJECT_NAME)"; \
		fi; \
		echo "What is the hostname you want to access the project ? [default: $$projectname.local]"; \
		read host; \
		if [ -z $$host ]; then \
			host="$$projectname.local"; \
		fi; \
		echo "Copying .env"; \
		cp docker/dist/.env .env; \
		if [ $(shell uname -s) = "Darwin" ]; then \
			sed -i "" "s/COMPOSE_PROJECT_NAME=.*/COMPOSE_PROJECT_NAME=$$projectname/g" .env; \
			sed -i "" "s/VIRTUAL_HOST=.*/VIRTUAL_HOST=$$host/g" .env; \
		else \
			sed -i "s/COMPOSE_PROJECT_NAME=.*/COMPOSE_PROJECT_NAME=$$projectname/g" .env; \
			sed -i "s/VIRTUAL_HOST=.*/VIRTUAL_HOST=$$host/g" .env; \
		fi; \
	else \
		if [ ! -f docker/dist/.env ]; then \
			echo 'WARNING : .env file is missing !'; \
		fi; \
		if [ -f .env ]; then \
			echo '.env file exists, skipping...'; \
		fi; \
	fi;

reinstall: ## Delete environment files and regenerate them
	@${MAKE} uninstall && ${MAKE} install;

uninstall: ## Delete environment files and regenerate them
	@if [ -f docker-compose.yml ] && [ -f .env ]; then \
		${MAKE} down; \
	fi;
	@if [ -f electron.js ]; then \
		echo "Do you want to remove electron.js file ? [default: no]"; \
		read yesorno; \
			if [ $$yesorno = "yes" ]; then \
				rm electron.js; \
			fi; \
	fi;
	@if [ -f .env ]; then \
		rm .env; \
	fi;
	@if [ -f docker-compose.override.yml ]; then \
		rm docker-compose.override.yml; \
	fi;
	@if [ -f docker-sync.yml ]; then \
		rm docker-sync.yml; \
	fi;
	@if [ -f Dockerfile ]; then \
		rm Dockerfile; \
	fi;
	@if [ -f docker-compose.yml ]; then \
		rm docker-compose.yml; \
	fi;
	@if [ -f docker-compose.ci.yml ]; then \
		rm docker-compose.ci.yml; \
	fi;
	@if [ -d node_modules ]; then \
		echo "Do you want to remove node_modules ? [default: no]"; \
		read yesorno; \
			if [ "$$yesorno" = "yes" ]; then \
				rm -rf node_modules; \
			fi;\
	fi;

docker-files: ## Copy docker files from dist
	@if [ $(shell uname -s) = "Darwin" ] && [ -f docker/dist/docker-sync.yml ] && [ ! -f docker-sync.yml ]; then \
		echo "Do you want to use docker-sync ? [default: no]";\
		read yesorno; \
			if [ "$$yesorno" = "yes" ]; then \
				cp docker/dist/docker-sync.yml docker-sync.yml; \
				if [ $(shell uname -s) = "Darwin" ]; then \
					sed -i "" "s/COMPOSE_PROJECT_NAME/$(COMPOSE_PROJECT_NAME)/g" docker-sync.yml; \
				else \
					sed -i "s/COMPOSE_PROJECT_NAME/$(COMPOSE_PROJECT_NAME)/g" docker-sync.yml; \
				fi; \
				if [ -f docker/dist/docker-compose.override.yml ] && [ ! -f docker-compose.override.yml ]; then \
					cp docker/dist/docker-compose.override.yml docker-compose.override.yml; \
					if [ $(shell uname -s) = "Darwin" ]; then \
						sed -i "" "s/COMPOSE_PROJECT_NAME/$(COMPOSE_PROJECT_NAME)/g" docker-compose.override.yml; \
					else \
						sed -i "s/COMPOSE_PROJECT_NAME/$(COMPOSE_PROJECT_NAME)/g" docker-compose.override.yml; \
					fi; \
				fi; \
				${MAKE} sync-start; \
			fi; \
	fi;
	@if [ -f docker/dist/docker-compose.yml ] && [ ! -f docker-compose.yml ]; then \
		cp docker/dist/docker-compose.yml docker-compose.yml; \
	fi;

hosts: ## Put hostnames required in project into /etc/hosts file
	@echo "Update /etc/hosts file";
	@echo "This hosts will be added to you hosts file : ";
	@echo "- $(VIRTUAL_HOST)";
	@echo "Do you want to continue ? [default: no]";
	@read yesorno; \
		if [ "$$yesorno" = "yes" ]; then \
			if [ $(shell cat /etc/hosts | grep $(VIRTUAL_HOST) -c) -ne 0 ]; then \
				echo "Hosts already set."; \
			else \
				echo "Updating hosts file..."; \
				sudo -- sh -c -e "echo '127.0.0.1 \t$(VIRTUAL_HOST)' >> /etc/hosts"; \
			fi; \
		else \
			echo "Skipping ..."; \
		fi;

#
##@ USAGE
#

start: ## Make containers up & start projet on editor mode
	@${MAKE} up;
	@docker-compose exec web npm run dev;

.PHONY: build
build: ## Build projet on editor mode inside container
	@${MAKE} up;
	@docker-compose exec web npm run build;

npm-i: ## Install NPM dependencies
	@${MAKE} up;
	@docker-compose exec web npm install;


.PHONY: tests
tests: ## Start test command in container
	@docker-compose exec web npm run tests;

prettier: ## Start prettier command in container
	@docker-compose exec web npm run prettier;

lint: ## Start prettier command in container
	@docker-compose exec web npm run lint;

# compose arguments for make npm
ifeq (npm, $(firstword $(MAKECMDGOALS)))
  npmrunargs := $(wordlist 2, $(words $(MAKECMDGOALS)), $(MAKECMDGOALS))
  $(eval $(npmrunargs):;@true)
endif

npm: ## Start npm command in container
	@docker-compose exec web npm $(npmrunargs);

#
##@ DOCKER
#

up: ## Start containers
	@echo "Starting containers...";
	@${MAKE} sync-start;
	@docker-compose up -d;

stop: ## Stop containers
	@echo "Stopping containers...";
	@if [ -f docker-compose.ci.yml ]; then \
		docker-compose -f docker-compose.yml -f docker-compose.ci.yml stop; \
	else \
		docker-compose stop; \
	fi;

down: ## Kill containers
	@echo "Killing containers...";
	@${MAKE} sync-clean;
	@if [ -f docker-compose.ci.yml ]; then \
		docker-compose -f docker-compose.yml -f docker-compose.ci.yml down; \
	else \
		docker-compose down; \
	fi;

images: ## Build images
	@echo "Building docker image...";
	@docker-compose build --force-rm;

restart: ## Restart containers
	@echo "Restart container...";
	@${MAKE} down && ${MAKE} start;

sync-start: ## Start docker-sync (Mac only)
	@if [ $(shell uname -s) = "Darwin" ]; then \
		if [ "$(shell docker ps | grep $(COMPOSE_PROJECT_NAME)-data-volume | awk '{print $$12}')" = "$(COMPOSE_PROJECT_NAME)-data-volume" ]; then \
			echo "Docker-sync already running. Skipping."; \
		else \
			if [ -d .docker-sync ]; then \
				rm -rf .docker-sync; \
			fi; \
			if [ -f docker-sync.yml ]; then \
				echo "Starting docker-sync..."; \
				docker-sync start; \
			fi;\
		fi; \
	fi;

sync-clean: ## Stop docker-sync if running (Mac only)
	@if [ $(shell uname -s) = "Darwin" ] && [ -f docker-sync.yml ]; then \
		echo "Stopping docker-sync..."; \
		docker-sync clean; \
	fi;

terminal: ## Get terminal of node container
	@docker-compose exec -u 1000:1000 web bash;

terminal-root: ## Get terminal as root of node container
	@docker-compose exec -u 0 web bash;

# compose arguments for make npm
ifeq (command, $(firstword $(MAKECMDGOALS)))
  commandargs := $(wordlist 2, $(words $(MAKECMDGOALS)), $(MAKECMDGOALS))
  $(eval $(commandargs):;@true)
endif

command: ## Run command into terminal
	@docker-compose exec -u 1000:1000 web $(commandargs);

# compose arguments for make npm
ifeq (command-root, $(firstword $(MAKECMDGOALS)))
  commandrootargs := $(wordlist 2, $(words $(MAKECMDGOALS)), $(MAKECMDGOALS))
  $(eval $(commandrootargs):;@true)
endif

command-root: ##  Run command into terminal as root
	@docker-compose exec -u 0 web $(commandrootargs);
