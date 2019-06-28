#!/bin/bash

API="http://localhost:7165"
URL_PATH="/examples"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
