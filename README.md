# MartinExperiments.com
  
[![Build Status](https://api.travis-ci.org/martin-experiments/martinexperiments.com.svg)](https://travis-ci.org/martin-experiments/martinexperiments.com)

The website for Martin Experiments LLC.

## Install
```bash 
$ npm install
```

## Build
```bash 
$ ME_URL='http://martinexperiments.com:80' npm run build
```

## Production Build
```bash
$ npm run prod
```

## Run
```bash
$ DEBUG='sa*' \
  ME_CONTENTFUL_PREVIEW_ACCESS_TOKEN=preview_token \
  ME_CONTENTFUL_PRODUCTION_ACCESS_TOKEN=production_token \
  ME_CONTENTFUL_SPACE=space_id \
  ME_PORT=8080 \
  ME_URL=http://localhost:8080 \
  ME_FETCH_INTERVAL=30 \
  npm run watch
```

## Watch
```bash
$ DEBUG='sa*' \
  ME_CONTENTFUL_PREVIEW_ACCESS_TOKEN=preview_token \
  ME_CONTENTFUL_PRODUCTION_ACCESS_TOKEN=production_token \
  ME_CONTENTFUL_SPACE=space_id \
  ME_PORT=8080 \
  ME_URL=http://localhost:8080 \
  ME_FETCH_INTERVAL=30 \
  npm start
```

## License
Copyright 2016 Martin Experiments LLC. All rights reserved.
