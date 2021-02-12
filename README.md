## Introduction

This repository contain full stack for React.

Makefile is used to build docker environment and containers management. 

#### Dependencies used - Thanks to...

Development environment :
- **Node**
- **Webpack**
- **TypeScript**
- **Prettier**
- **TSLint**
- **ES6**

Framework : 
- **React**
- **ReactDOM**
- **React router dom**
- **Jest**

## Requirements to use Docker :

- **Docker**
- **Docker compose**
- **Docker nginx-proxy**
- **Docker sync** (For MacOS, optional)

## Installation
```bash
$ make install
```

During the installation, the script will ask you some questions to configure your project : 
- The project name (by default : project)
- The hostname you want access the project : (by default : project.local)
- /etc/hosts should be updated ?

## Structure

- docker

This directory contains dist docker files, you can edit them and reinstall project if need

- src

This directory contains all code logic, the style & the assets.
It also contains the entrypoint of application into index.tsx and main html file (index.html)

- tests

This directory contains all tests of components/services used into application.

- Makefile

This file is used to manage project dockerization

- package.json

This file contains your preconfigured package

- jest.config.js

Configuration file for application testing

- tsconfig.json

Configuration file for typescript

- tslint.json

Linter configuration rules

- webpack.config.js

Webpack configuration

## Usage

These are few command utils into development context.

Commands can be added into Makefile for more flexibility of project usage.

### Customize stack for your project

Before all, you just edit 2 file to make this stack be your own project : 
- In Makefile in first line
```dotenv
DEFAULT_PROJECT_NAME=my-super-project-name
```

- In package.json set your own information
```json
{
  "name": "acseo-react-project",
  "version": "1.0.0",
  "description": "ACSEO fabulous react project",
  ...
}
```

### Project installation

```bash
$ make install
```

### Start project

```bash
$ make start
```

### Down project :
```bash
$ make down
```

### Docker terminal :
```bash
$ make terminal
$ make terminal-root
```

### Run command directly into container :

```bash
$ make command ls src
$ make command-root ls src   // Root context
```

### Run npm command directly into container :

```bash
$ make npm install
```

### Uninstall project (remove docker files) :
```bash
$ make uninstall
```

### Reinstall project :
```bash
$ make reinstall
```

### Run linter :
```bash
$ make lint
```

### Run prettier :
```bash
$ make prettier
```

### Build application :

```bash
$ make build
```

### List all Make commands :
```bash
$ make        // Call implicitly the second line
$ make help
```
