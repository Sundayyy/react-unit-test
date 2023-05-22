# react-testing-codebase


## Installation
- Make sure that you have Node.js v16, yarn v1, Docker v20, docker-compose v1 or above installed.

- Setup in order to install dependencies :
```bash
yarn install
```

- Setup Husky:
```bash
npx husky install
```

- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

- Environment:
```bash
cp .env.example .env.dev
```

## Quick Start
```bash
yarn dev
```

- See the example app at:
```bash
http://localhost:4002
```

## Build and Deploy
- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

- Environment:
```bash
cp .env.example .env.production
```

- Build:
```bash
yarn build:production
```

## Quick Start with Docker
- The first Build and start container staging:
```bash
docker-compose up --build
```

- Start container staging:
```bash
docker-compose up
```

- Stop container staging:
```bash
docker-compose down
```

- See the example app at:
```bash
http://localhost:${PORT}
```

## Build and Deploy with docker
- Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.

- Environment:
```bash
cp .env.example .env.production
```

- Build images:
```bash
docker build -t codebase-react-18-cra:v1.0 .
```

- Run images:
```bash
docker run -d -p 4002:4002 codebase-react-18-cra:v1.0
```

- See the example app at:
```bash
http://localhost:4002
```
