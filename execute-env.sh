#!/bin/sh
npm run build
docker build -t kevensaldana.com:1.0.0 .
docker run -it --rm --name website -p 4000:80 kevensaldana.com:1.0.0
