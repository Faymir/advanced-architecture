## Description
This project demonstrates how to use Hexagonal/ onion architecture with some DDD (Domain Driven Devlopment) concept and the CQRS ( Command Query Responsibility Segregation) pattern in a NestJS application.
It uses PostgreSQl as the write model and MongoDB as the read model.
It also supports in memory database by switching infrastructure layer in the `main.ts` file.

It's a simple demonstration project, with incident alarms that can be created, and listed.

The `docker-compose.yml` file is used to run the PostgreSQL and MongoDB containers.


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
