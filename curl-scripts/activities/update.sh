#!/bin/bash

API="http://localhost:7165"
URL_PATH="/activities"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "activity": {
    "title": "'"${TITLE}"'",
    "description": "'"${DESC}"'",
    "completed": "'"${COMP}"'"
  }
}'

echo
