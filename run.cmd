@echo off

cd page
CALL npm install
CALL npm run build

cd ..
CALL go build

echo Starting the service......
moment -f example/moment.yaml
