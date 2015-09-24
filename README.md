# passplum [![Build Status](https://travis-ci.org/maxbeatty/passplum.svg)](https://travis-ci.org/maxbeatty/passplum) [![Code Climate](https://codeclimate.com/github/maxbeatty/passplum/badges/gpa.svg)](https://codeclimate.com/github/maxbeatty/passplum) [![Test Coverage](https://codeclimate.com/github/maxbeatty/passplum/badges/coverage.svg)](https://codeclimate.com/github/maxbeatty/passplum)

> Easier, Better Passwords

## Getting Started

You'll need [Node.js](https://nodejs.org/en/) and [a sequelize compatible database](http://sequelize.readthedocs.org/en/latest/docs/getting-started/#installation) like postgres.

Populate these environment variables or declare them in a `.env` file in the root of the project. _Development defaults provided._

```
DB_TYPE=postgres
DB_HOST=localhost
DB_USER=max
DB_PASS=''
DB_NAME=passplum

CRYPTO_SALT=passplum
CRYPTO_ITERATIONS=4096
CRYPTO_KEY_LEN=512
CRYPTO_DIGEST=sha256
```

Install dependencies:

```
npm install
```

Start the server:

```
NODE_ENV=dev PORT=8000 npm start
```

You should now be able to open [http://localhost:8000](http://localhost:8000) to get a great password.

### Seeding Data

You can use any set of words you like. Put one word per line in a text file. See [`example-seed-data.csv`](https://github.com/maxbeatty/passplum/blob/master/example-seed-data.csv) as an example. Running the initial database migration with the `SEED_FILE` environment variable will populate your database.

```
SEED_FILE=example-seed-data.csv node seed.js
```

## Scripts

### start

Start server specifying an environment. The environment dictates which plugins are enabled in [`confidence.json`](https://github.com/maxbeatty/passplum/blob/master/confidence.json)

```
NODE_ENV=dev npm start
```

### test

Run test suite which enforces 100% code coverage and lints using the [hapi style guide](https://github.com/continuationlabs/eslint-plugin-hapi).

```
npm test
```
