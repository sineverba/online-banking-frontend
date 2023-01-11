Online Banking Demo Frontend
============================

> Demo frontend project for an online banking, written with React + Redux

| Service | Github link | Demo |
| ------- | ----------- | ---- |
| Backend | [https://github.com/sineverba/online-banking-backend](https://github.com/sineverba/online-banking-backend) | [Swagger](https://bitbankapi.k2p.it/swagger-ui/index.html) |
| Frontend | [https://github.com/sineverba/online-banking-frontend](https://github.com/sineverba/online-banking-frontend) | [Netlify](https://bit-bank.netlify.app/) - [Vercel](https://online-banking-frontend.vercel.app/) - [Custom](https://bitbank.k2p.it/) |

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

## Setup
1. Copy .env.bak into .env
2. Insert random string on `LOCALSTORAGE_ACCESS_TOKEN` in .env file (`$ echo $RANDOM | md5sum | head -c 20; echo;`). This will deny conflicts with other localStorage used by other projects

## Production
+ Use files in `/production` folder
