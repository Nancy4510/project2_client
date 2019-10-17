curl --include --request PATCH "https://peaceful-cove-13394.herokuapp.com/tickets/${ID}" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
    "tickets": {
      "date": "'"${DATE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
