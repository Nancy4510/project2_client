curl --include --request PATCH "https://peaceful-cove-13394.herokuapp.com/tickets/${ID}" \
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
