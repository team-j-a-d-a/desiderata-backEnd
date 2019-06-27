#!/bin/sh

API="http://localhost:7165"
URL_PATH="/activities"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
