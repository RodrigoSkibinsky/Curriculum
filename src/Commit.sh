#!/bin/bash

Ej=$1

git add .
git commit -m "$Ej"
git push
npm run deploy
