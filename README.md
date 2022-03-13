Online Banking Demo Frontend
============================

> Demo frontend project for an online banking, written with React + Redux

| Service | Github link | Demo |
| ------- | ----------- | ---- |
| Backend | [https://github.com/sineverba/online-banking-backend](https://github.com/sineverba/online-banking-backend) | [Swagger](https://online-banking-backend.k2p.it) |
| Frontend | [https://github.com/sineverba/online-banking-frontend](https://github.com/sineverba/online-banking-frontend) | [Netlify](TODO) - [Vercel](TODO) |

__This project uses:__

+ TDD
+ 100% test coverage
+ Dockerization
+ CI/CD

| CI/CD | Link |
| ----- | ---- |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/online-banking-frontend.svg?style=svg)](https://circleci.com/gh/sineverba/online-banking-frontend) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/online-banking-frontend.svg)](https://sineverba.semaphoreci.com/projects/online-banking-frontend) |
| Sonarqube | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=online-banking-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=online-banking-frontend) |
| Coveralls | [![Coverage Status](https://coveralls.io/repos/github/sineverba/online-banking-frontend/badge.svg?branch=master)](https://coveralls.io/github/sineverba/online-banking-frontend?branch=master) |

## Local SonarQube

+ Copy .env.bak into .env
+ Start containers (`docker-compose up -d`)
+ Connect to SonarQube (at `http://localhost:9000")
+ First credentials are `admin // admin`
+ To associate a new project
  + Manually
  + Project Display Name: Online Banking Backend
  + Project Key: online-banking-backend
  + Setup
  + Locally
  + Generate a token called `online-banking-backend`
  + In `.env`, place as `SONAR_LOGIN` the token value
  + Continue > Run analyses ... > Other > Linux
  + Launch scanner with `make sonar`

### Next Sonar scan

+ `make sonar`
