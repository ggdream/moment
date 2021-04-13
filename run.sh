#!/bin/sh

cd page
npm install && npm run build

cd ..
go build

echo Starting the service......
moment -f example/moment.yaml
