curl --include --request POST "https://peaceful-cove-13394.herokuapp.com/hardwares/" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "hardware": {
      "date": "'"${DATE}"'",
      "name_of_hardware": "'"${NAMEOFHARDWARE}"'",
      "processor_speed": "'"${PROCESSORSPEED}"'",
      "memory": "'"${MEMORY}"'",
      "serial_number": "'"${SERIALNUMBER}"'"
    }
  }'

echo
