curl --include --request POST "https://peaceful-cove-13394.herokuapp.com/tickets/" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "ticket": {
      "date": "'"${DATE}"'",
      "type_of_pc": "'"${TYPEOFPC}"'",
      "model_number": "'"${MODELNUMBER}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
